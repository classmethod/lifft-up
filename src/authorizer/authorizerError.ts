// NOTE: https://developers.line.biz/ja/reference/line-login/#verify-id-token-error-response
export interface AuthorizerError {
  error: string
  error_description: string
}

export class AuthorizerError extends Error {
  code: string
  constructor(error: AuthorizerError) {
    super(error.error_description)
    this.code = error.error
  }
}
