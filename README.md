# lifft-up

![CI status](https://github.com/classmethod/lifft-up/actions/workflows/create-release.yaml/badge.svg)

**Let's lift up your LIFF apps 🏋️**

Feature collections to realize your creativity.

- authorizer with [OAuth provided by LINE Corp](https://developers.line.biz/en/reference/line-login/#oauth)

## Getting Started

```console
cd /your/working/dir

npm install @classmethod/lifft-up
// or
yarn add @classmethod/lifft-up
```

## Usage

Authentication by IDToken.

```
import * as lifftUp from '@classmethod/lifft-up'

(async () => {
	// https://developers.line.biz/ja/reference/liff/#get-id-token
	const idToken = liff.getIDToken()
	// Specify Liff Channel ID.
	const clientId = '1234567890'
	// The IDToken payload will be returned.
	const payload = await lifftUp.authorizer(idToken, clientId)
})()

```

