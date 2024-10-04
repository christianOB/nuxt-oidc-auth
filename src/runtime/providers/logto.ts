import { ofetch } from 'ofetch'
import { generateProviderUrl } from '../server/utils/config'
import { defineOidcProvider, type OidcProviderConfig } from '../server/utils/provider'

type LogtoRequiredFields = 'baseUrl' | 'clientId' | 'clientSecret' | 'redirectUri'

export const logto = defineOidcProvider<OidcProviderConfig, LogtoRequiredFields> ({
  additionalLogoutParameters: {
    client_id: '{clientId}',
  },
  authorizationUrl: 'oidc/auth',
  logoutRedirectParameterName: 'post_logout_redirect_uri',
  logoutUrl: 'oidc/session/end',
  async openIdConfiguration(config: any) {
    const url = generateProviderUrl(config.baseUrl as string, 'oidc/.well-known/openid-configuration')
    return await ofetch(url)
  },
  pkce: true,
  nonce: true,
  prompt: ['consent'],
  requiredProperties: ['baseUrl', 'clientId', 'clientSecret', 'redirectUri'],
  scope: ['openid', 'offline_access', 'profile', 'email'],
  skipAccessTokenParsing: true,
  tokenRequestType: 'form-urlencoded',
  tokenUrl: 'oidc/token',
  userInfoUrl: 'oidc/me',
  validateAccessToken: false,
})
