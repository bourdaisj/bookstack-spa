const state = {
  token_id: localStorage.getItem('token_id'),
  token_secret: localStorage.getItem('token_secret'),
  get isAuth() {
    return Boolean(this.token_id && this.token_secret)
  }
}

export function SET_TOKEN_ID(token_id) {
  state.token_id = token_id
  localStorage.setItem('token_id', token_id)
}

export function SET_TOKEN_SECRET(token_secret) {
  state.token_secret = token_secret
  // todo maybe store in session storage with encryption
  localStorage.setItem('token_secret', token_secret)
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