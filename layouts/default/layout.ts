import { navigateTo } from '../../router'
import { REMOVE_TOKEN_ID, REMOVE_TOKEN_SECRET } from '../../state'

let previous_link = null
let current_link = null

function onLinkClicked(e: Event) {
  e.preventDefault()
  previous_link = current_link
  current_link = this
  navigateTo(this.id.split('-')[0])
}

export function init(route) {
  for (const nav_link of document.querySelectorAll('.nav-link')) {
    if (nav_link.id === `${route.name}-page-link`) {
      current_link = nav_link
    }

    nav_link.addEventListener('click', onLinkClicked)
  }

  document.getElementById('clear-credentials-btn').addEventListener('click', () => {
    REMOVE_TOKEN_ID()
    REMOVE_TOKEN_SECRET()
    navigateTo('login')
  })
}

export function onNavigationComplete() {    
  if (previous_link) {
    previous_link.classList.remove('active')
  }

  current_link.classList.add('active')
}