// NOTE: https://developers.line.biz/ja/reference/line-login/#verify-id-token-error-response
export const AuthorizerErrorDescriptions = {
  InvalidIdToken: 'Invalid IdToken.',
  InvalidIdTokenIssuer: 'Invalid IdToken Issuer.',
  IdTokenExpired: 'IdToken expired.',
  InvalidIdTokenAudience: 'Invalid IdToken Audience.',
  InvalidIdTokenNonce: 'Invalid IdToken Nonce.',
  InvalidIdTokenSubjectIdentifier: 'Invalid IdToken Subject Identifier.',
} as const

export type AuthorizerErrorDescription =
  typeof AuthorizerErrorDescriptions[keyof typeof AuthorizerErrorDescriptions]

export interface AuthorizerError {
  error: string
  error_description: AuthorizerErrorDescription
}

export class LifftUpError extends Error {
  code: string
  description: string
  constructor(error: AuthorizerError) {
    super(toMessage(error.error_description))
    this.code = error.error
    this.description = error.error_description
  }
}

function toMessage(description: AuthorizerErrorDescription): string {
  switch (description) {
    case AuthorizerErrorDescriptions.InvalidIdToken:
      return 'IDトークンの形式が正しくないか、署名が無効です。'
    case AuthorizerErrorDescriptions.InvalidIdTokenIssuer:
      return 'IDトークンが "https://access.line.me" 以外のサイトで生成されました。'
    case AuthorizerErrorDescriptions.IdTokenExpired:
      return 'IDトークンの有効期限が切れました。'
    case AuthorizerErrorDescriptions.InvalidIdTokenAudience:
      return 'IDトークンのAudienceが、リクエストで指定したclient_idと異なります。'
    case AuthorizerErrorDescriptions.InvalidIdTokenNonce:
      return 'IDトークンのNonceが、リクエストで指定したnonceと異なります。'
    case AuthorizerErrorDescriptions.InvalidIdTokenSubjectIdentifier:
      return 'IDトークンのSubjectIdentifierは、リクエストで指定したuser_idと異なります。'
  }
}
