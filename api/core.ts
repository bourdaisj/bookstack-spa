import { getTokenId, getTokenSecret } from '../state'

export const API_PREFIX = 'http://localhost:8080/api'

type HttpVerb = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

export async function makeApiCall(url: string, method: HttpVerb = 'GET') {
  const token_id = getTokenId()
  const token_secret = getTokenSecret()

  // Authorization: Token <token_id>:<token_secret>
  const response = await fetch(`${API_PREFIX}/${url}`, {
    headers: {
      'Authorization': `Token ${token_id}:${token_secret}`,
      'Content-Type': 'application/json',
    },
    method
  })
  
  return response
}