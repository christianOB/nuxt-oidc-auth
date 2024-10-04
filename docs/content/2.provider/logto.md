---
title: Logto
description: Logto provider documentation
icon: i-tabler-letter-l
---

## Feature/OIDC support

✅&nbsp; PKCE<br>
✅&nbsp; Nonce<br>
✅&nbsp; State<br>
❌&nbsp; Access Token validation<br>
✅&nbsp; ID Token validation<br>

## Introduction

For Logto you have to provide at least the `redirectUri`, `baseUrl`, `clientId` and `clientSecret` properties. The `baseUrl` is used to dynamically create the `openIdConfiguration`, `authorizationUrl`, `tokenUrl`, `logoutUrl` and `userInfoUrl`. 
The provider supports PKCE and Code authentication schemes. Be sure to include clientSecret even when using PCKE. Logto only supports the authorization code flow and not the implicit and hybrid flows.

## Provider specific parameters

This providers doesn't have specific parameters.

## Example Configuration

::callout{icon="i-carbon-warning-alt" color="amber"}
Never store sensitive values like your client secret in your Nuxt config. Our recommendation is to inject at least client id and client secret via. environment variables.
::

```typescript [nuxt.config.ts]
logto: {
  clientId: '',
  clientSecret: '', // Works with PKCE
  redirectUri: 'http://localhost:3000/auth/logto/callback', // Replace with your domain
  baseUrl: '', // For example http://localhost:3001
  logoutRedirectUri: 'https://google.com', // Needs to be registered in logto portal
},
```

### Environment variables

Dotenv files are only for (local) development. Use a proper configuration management or injection system in production.

```ini [.env]

```
