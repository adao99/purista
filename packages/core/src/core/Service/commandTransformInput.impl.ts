import { SpanStatusCode } from '@opentelemetry/api'
import { ZodError } from 'zod'

import { HandledError, UnhandledError } from '../Error'
import { Command, CommandDefinition, Logger, StatusCode } from '../types'
import { Service } from './Service.impl'

export const commandTransformInput = async (
  serviceInstance: Service,
  logger: Logger,
  command: CommandDefinition,
  message: Readonly<Command<unknown, unknown>>,
) => {
  if (!command.hooks.transformInput) {
    return message.payload
  }

  const transformInput = command.hooks.transformInput
  return await serviceInstance.startActiveSpan(
    command.commandName + '.inputTransformation',
    {},
    undefined,
    async (_) => {
      const transform = transformInput.transformFunction.bind(serviceInstance, { logger, message })
      const parameterInput = await serviceInstance.wrapInSpan(
        command.commandName + '.validateParameter',
        {},
        async (subSpan) => {
          try {
            return transformInput.transformParameterSchema.parse(message.payload.parameter)
          } catch (err) {
            const error = err as ZodError
            subSpan.recordException(error)
            logger.warn({ ...subSpan.spanContext() }, 'transform input validation for parameter failed:', error.message)

            subSpan.setStatus({
              code: SpanStatusCode.ERROR,
              message: 'transform input validation for parameters failed',
            })
            throw new HandledError(StatusCode.BadRequest, undefined, error.issues)
          }
        },
      )

      const payloadInput = await serviceInstance.wrapInSpan(
        command.commandName + '.validatePayload',
        {},
        async (subSpan) => {
          try {
            return transformInput.transformInputSchema.parse(message.payload.payload)
          } catch (err) {
            const error = err as ZodError
            subSpan.recordException(error)
            logger.warn({ ...subSpan.spanContext() }, 'transform input validation for payload failed:', error.message)
            subSpan.setStatus({
              code: SpanStatusCode.ERROR,
              message: 'transform input validation for payload failed',
            })
            throw new HandledError(StatusCode.BadRequest, undefined, error.issues)
          }
        },
      )

      return await serviceInstance.wrapInSpan(command.commandName + '.transformFunction', {}, async (subSpan) => {
        try {
          return await transform(payloadInput, parameterInput)
        } catch (error) {
          const err = error as Error
          subSpan.recordException(err)
          subSpan.setStatus({
            code: SpanStatusCode.ERROR,
            message: err.message || 'Unable to transform input',
          })

          if (error instanceof HandledError) {
            throw error
          }
          logger.error({ err, ...subSpan.spanContext() }, 'Unable to transform input:')

          throw new UnhandledError(StatusCode.InternalServerError, 'Unable to transform input')
        }
      })
    },
  )
}