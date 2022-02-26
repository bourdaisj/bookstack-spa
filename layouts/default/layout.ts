import { navigateTo } from '../../router'
import { REMOVE_TOKEN_ID, REMOVE_TOKEN_SECRET } from '../../state'

export function onLayoutReady() {
  document.getElementById('clear-credentials-btn').addEventListener('click', () => {
    REMOVE_TOKEN_ID()
    REMOVE_TOKEN_SECRET()
    navigateTo('login')
  })
}