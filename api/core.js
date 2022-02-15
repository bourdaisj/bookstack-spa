import { getTokenId, getTokenSecret } from '../state.js'

export const API_PREFIX = 'http://localhost:8080/api'

export async function makeApiCall(url) {
  const token_id = getTokenId()
  const token_secret = getTokenSecret()

  // Authorization: Token <token_id>:<token_secret>
  const response = await fetch(`${API_PREFIX}/${url}`, {
    headers: {
      'Authorization': `Token ${token_id}:${token_secret}`,
      'Content-Type': 'application/json',
    },
  })
  
  return response
}