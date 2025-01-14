import * as index from './index'

it('exports core functions', () => {
  expect(index.puristaVersion).toBeDefined()
  // core
  expect(index.DefaultEventBridge).toBeDefined()
  expect(index.DefaultLogger).toBeDefined()
  expect(index.createErrorResponse).toBeDefined()
  expect(index.createInfoMessage).toBeDefined()
  expect(index.createSuccessResponse).toBeDefined()
  expect(index.getCleanedMessage).toBeDefined()
  expect(index.getErrorMessageForCode).toBeDefined()
  expect(index.getNewCorrelationId).toBeDefined()
  expect(index.getNewEBMessageId).toBeDefined()
  expect(index.getNewTraceId).toBeDefined()
  expect(index.getUniqueId).toBeDefined()
  expect(index.infoMessageTypes).toBeDefined()
  expect(index.initLogger).toBeDefined()
  expect(index.isCommand).toBeDefined()
  expect(index.isCommandErrorResponse).toBeDefined()
  expect(index.isCommandResponse).toBeDefined()
  expect(index.isCommandSuccessResponse).toBeDefined()
  expect(index.isInfoMessage).toBeDefined()
  expect(index.isInfoServiceFunctionAdded).toBeDefined()
  expect(index.HandledError).toBeDefined()
  expect(index.EBMessageType).toBeDefined()
  expect(index.Service).toBeDefined()
  expect(index.StatusCode).toBeDefined()
  expect(index.UnhandledError).toBeDefined()

  // stores
  expect(index.DefaultConfigStore).toBeDefined()
  expect(index.DefaultSecretStore).toBeDefined()
  expect(index.DefaultStateStore).toBeDefined()

  // http client
  expect(index.HttpClient).toBeDefined()

  // helper
  expect(index.ServiceBuilder).toBeDefined()
  expect(index.CommandDefinitionBuilder).toBeDefined()
  expect(index.getCommandFunctionWithValidation).toBeDefined()
  expect(index.getSubscriptionFunctionWithValidation).toBeDefined()
  expect(index.SubscriptionDefinitionBuilder).toBeDefined()
  expect(index.convertToCamelCase).toBeDefined()
  expect(index.convertToKebabCase).toBeDefined()
  expect(index.convertToPascalCase).toBeDefined()
  expect(index.convertToSnakeCase).toBeDefined()

  // test helper
  expect(index.getCommandContextMock).toBeDefined()
  expect(index.getSubscriptionContextMock).toBeDefined()
  expect(index.getLoggerMock).toBeDefined()
  expect(index.getCommandContextMock).toBeDefined()
  expect(index.getEventBridgeMock).toBeDefined()
  expect(index.getCommandErrorMessageMock).toBeDefined()
  expect(index.getCommandMessageMock).toBeDefined()
  expect(index.getCommandSuccessMessageMock).toBeDefined()
  expect(index.getCustomMessageMessageMock).toBeDefined()
})
