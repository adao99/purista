import { DefinitionEventBridgeConfig } from '../DefinitionEventBridgeConfig'
import { EBMessageAddress } from '../EBMessageAddress'
import { EBMessageType } from '../EBMessageType.enum'
import { InstanceId } from '../InstanceId'
import { PrincipalId } from '../PrincipalId'

/**
 * A subscription managed by the event bridge
 *
 * @group Subscription
 */
export type Subscription<PayloadType = unknown, ParameterType = unknown> = {
  /** the producer address of the message  */
  sender?: {
    serviceName?: string
    serviceVersion?: string
    serviceTarget?: string
    instanceId?: InstanceId
  }
  /** the consumer address of the message */
  receiver?: {
    serviceName?: string
    serviceVersion?: string
    serviceTarget?: string
    instanceId?: InstanceId
  }
  /** the message type */
  messageType?: EBMessageType
  /** the event name to subscribe for */
  eventName?: string // event to listen for
  /** the event name to be used for custom message if the subscriptions returns a result */
  emitEventName?: string // event to emit if output payload is set
  /** the principal id  */
  principalId?: PrincipalId
  /** the message payload */
  payload?: {
    parameter?: ParameterType
    payload?: PayloadType
  }
  /** the address of the subscription (service name, version and subscription name) */
  subscriber: EBMessageAddress
  /** config information for event bridge */
  eventBridgeConfig: DefinitionEventBridgeConfig
}
