import { fetch } from '../polyfill/fetch'
import { AuthorizedPayload } from './authorizedPayload'
import { AuthorizerError } from './authorizerError'

export async function authorizer(
  idToken: string,
  clientId: string
): Promise<AuthorizedPayload> {
  const params = new URLSearchParams()
  params.append('id_token', idToken)
  params.append('client_id', clientId)

  // NOTE: https://developers.line.biz/ja/reference/line-login/#verify-id-token
  const response = await fetch('https://api.line.me/oauth2/v2.1/verify', {
    method: 'POST',
    body: params,
  })

  const json = await response.json()
  if (response.ok) {
    return json
  }
  throw new AuthorizerError(json)
}
