export interface AuthorizerError {
  error: string
  error_description: string
}

export class AuthorizerError extends Error {
  constructor(error: AuthorizerError) {
    super(`Line authorizer failure!! ${JSON.stringify(error)}`)
  }
}
