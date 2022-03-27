const state = {
  token_id: localStorage.getItem('token_id'),
  token_secret: localStorage.getItem('token_secret'),
  api_url: localStorage.getItem('api_url'),
  get isAuth() {
    return Boolean(this.token_id && this.token_secret)
  }
}

export function SET_TOKEN_ID(token_id: string) {
  state.token_id = token_id
  localStorage.setItem('token_id', token_id)
}

export function SET_TOKEN_SECRET(token_secret: string) {
  state.token_secret = token_secret
  // todo maybe store in session storage with encryption
  localStorage.setItem('token_secret', token_secret)
}

export function SET_API_URL(api_url: string) {
  state.api_url = api_url
  localStorage.setItem('api_url', api_url)
}

export function REMOVE_TOKEN_ID() {
  state.token_id = undefined
  localStorage.removeItem('token_id')
}

export function REMOVE_TOKEN_SECRET() {
  state.token_secret = undefined
  localStorage.removeItem('token_secret')
}

export function isAuth() {
  return state.isAuth
}

export function getTokenId() {
  return state.token_id
}

export function getTokenSecret() {
  return state.token_secret
}

export function getApiUrl() {
  return state.api_url
}