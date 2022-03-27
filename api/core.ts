import { getTokenId, getTokenSecret, getApiUrl } from '../state'

export const API_SUFFIX = 'api'

type HttpVerb = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

export async function makeApiCall(url: string, method: HttpVerb = 'GET') {
  const token_id = getTokenId()
  const token_secret = getTokenSecret()
  const api_url = getApiUrl()

  // Authorization: Token <token_id>:<token_secret>
  const response = await fetch(`${api_url}/${API_SUFFIX}/${url}`, {
    headers: {
      'Authorization': `Token ${token_id}:${token_secret}`,
      'Content-Type': 'application/json',
    },
    method
  })
  
  return response
}