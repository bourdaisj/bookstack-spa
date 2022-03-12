import { navigateTo } from '../../router'
import { REMOVE_TOKEN_ID, REMOVE_TOKEN_SECRET } from '../../state'

let current_link = null

function onLinkClicked() {
  navigateTo(this.id.split('-')[0])

  if (current_link) {
    current_link.classList.remove('active')
  }

  this.classList.add('active')
  current_link = this
}

export function onLayoutReady() {    
  for (const nav_link of document.querySelectorAll('.nav-link')) {
    nav_link.addEventListener('click', onLinkClicked)
  }
  // todo: pass a promise from the router that will resolve when the page is ready ?
  // todo: this way we can get the current route from the router and initiliaze the correct link based on that
  // todo: we need to initialize the link properly (on reload the active link do not get the active class)

  document.getElementById('clear-credentials-btn').addEventListener('click', () => {
    REMOVE_TOKEN_ID()
    REMOVE_TOKEN_SECRET()
    navigateTo('login')
  })
}