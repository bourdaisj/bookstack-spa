import { SET_TOKEN_ID, SET_TOKEN_SECRET, SET_API_URL, getApiUrl } from '../../state'
import { navigateTo } from '../../router'

let submit_btn = null
let token_id_input = null
let token_secret_input = null
let api_url_input = null

function onSubmit() {
  const token_id = token_id_input.value
  const token_secret = token_secret_input.value
  const api_url = api_url_input.value

  SET_TOKEN_ID(token_id)
  SET_TOKEN_SECRET(token_secret)
  SET_API_URL(api_url)

  navigateTo({ route_name: 'home' })
}

export function onPageReady() {
  submit_btn = document.querySelector('#submit-btn')
  token_id_input = document.querySelector('#token-id-input')
  token_secret_input = document.querySelector('#token-secret-input')
  api_url_input = document.querySelector('#api-url-input')

  api_url_input.value = getApiUrl()

  submit_btn.addEventListener('click', onSubmit)
}
