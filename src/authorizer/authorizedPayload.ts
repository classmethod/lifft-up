// NOTE: https://developers.line.biz/ja/reference/line-login/#verify-id-token-response
export interface AuthorizedPayload {
  iss: string
  sub: string
  aud: string
  exp: number
  iat: number
  amr: string[]
  name: string
  picture: string
  email: string

  // profile+ property
  // NOTE: https://developers.line.biz/ja/docs/partner-docs/line-profile-plus/#id-token
  given_name?: string
  given_name_pronunciation?: string
  middle_name?: string
  family_name?: string
  family_name_pronunciation?: string
  gender?: string
  birthdate?: string
  phone_number?: string
  address?: Address
}

// NOTE: https://developers.line.biz/ja/docs/partner-docs/line-profile-plus/#address-object
export interface Address {
  postal_code: string
  region: string
  locality: string
  street_address: string
  country: string
}
