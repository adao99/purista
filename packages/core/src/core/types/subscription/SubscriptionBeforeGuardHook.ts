import type { ServiceClass } from '../ServiceClass'
import type { SubscriptionFunctionContext } from './SubscriptionFunctionContext'

/**
 * Guard is called after command function input validation and before executing the command function.
 * The guard is usefull to separate for example auth checks from business logic.
 * It should throw HandledError or return void.
 *
 * @group Subscription
 */
export type SubscriptionBeforeGuardHook<
  ServiceClassType = ServiceClass,
  FunctionPayloadType = unknown,
  FunctionParamsType = unknown,
> = (
  this: ServiceClassType,
  context: SubscriptionFunctionContext,
  payload: Readonly<FunctionPayloadType>,
  parameter: Readonly<FunctionParamsType>,
) => Promise<void>
