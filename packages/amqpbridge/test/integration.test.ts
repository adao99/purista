import { getCommandMessageMock, getCommandSuccessMessageMock, getLoggerMock, Service } from '@purista/core'
import { createSandbox } from 'sinon'
import { GenericContainer, StartedTestContainer } from 'testcontainers'
import { z } from 'zod'

import { theServiceServiceBuilder, theServiceV1Service } from '../../../test/service/theService/v1'
import { AmqpBridge } from '../src'

const AMQP_PORT = 5672
const EXAMPLE_EVENT = 'exampleEvent'

describe('@purista/amqpbridge', () => {
  let container: StartedTestContainer
  let eventbridge: AmqpBridge
  const sandbox = createSandbox()
  const subscriptionStub = sandbox.stub().resolves()
  const logger = getLoggerMock(sandbox)
  let service: Service

  beforeAll(async () => {
    container = await new GenericContainer('rabbitmq:alpine')
      .withLogConsumer((stream) => {
        // stream.on('data', (line) => console.debug(line))
        // eslint-disable-next-line no-console
        stream.on('err', (line) => console.error(line))
      })
      .withExposedPorts({ host: AMQP_PORT, container: AMQP_PORT })
      .start()

    eventbridge = new AmqpBridge({ logger: logger.mock })
    await eventbridge.start()

    const subscriptionBuilder = theServiceV1Service
      .getSubscriptionBuilder('sendWelcomeEmail', 'send a welcome mail to new registered users')
      .subscribeToEvent(EXAMPLE_EVENT)
      .addPayloadSchema(z.any())
      .setSubscriptionFunction(subscriptionStub)

    theServiceServiceBuilder.addSubscriptionDefinition(subscriptionBuilder.getDefinition())

    service = theServiceServiceBuilder.getInstance(eventbridge, { logger: getLoggerMock(sandbox).mock })
    await service.start()
  })

  afterAll(async () => {
    await service.destroy()
    await eventbridge.destroy()
    await container.stop()
  })

  afterEach(() => {
    sandbox.resetHistory()
  })

  it('can invoke ping command', async () => {
    const command = getCommandMessageMock({
      receiver: {
        serviceName: service.info.serviceName,
        serviceVersion: service.info.serviceVersion,
        serviceTarget: 'ping',
      },
      sender: {
        serviceName: service.info.serviceName,
        serviceVersion: service.info.serviceVersion,
        serviceTarget: 'some',
      },
      payload: {
        payload: undefined,
        parameter: {
          required: 'yes',
        },
      },
    })
    const result = await eventbridge.invoke(command)

    expect(result).toEqual({
      ping: true,
    })

    expect(true).toBeTruthy()
  })

  it('receives subscriptions', async () => {
    const payload = { example: 'payload' }
    const commandResponse = getCommandSuccessMessageMock(payload, { eventName: EXAMPLE_EVENT })

    await eventbridge.emitMessage(commandResponse)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    expect(subscriptionStub.called).toBeTruthy()
  })
})
