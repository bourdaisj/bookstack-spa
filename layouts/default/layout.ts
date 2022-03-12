import { navigateTo } from '../../router'
import { REMOVE_TOKEN_ID, REMOVE_TOKEN_SECRET } from '../../state'

let previous_link = null
let current_link = null

function onLinkClicked(e: Event) {
  e.preventDefault()
  previous_link = current_link
  current_link = this
  navigateTo({ route_name: this.id.split('-')[0] })
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
    navigateTo({ route_name: 'login' })
  })
}

export function onNavigationComplete(to, from) {    
  if (from) {
    if (previous_link == undefined || previous_link.id.split('-')[0] !== from.name) {
      previous_link = document.querySelector(`#${from.name}-page-link`)
    }
  }

  if (previous_link) {
    previous_link.classList.remove('active')
  }

  if (current_link == undefined || current_link.id.split('-')[0] !== to.name) {
    current_link = document.querySelector(`#${to.name}-page-link`)
  }
  
  if (current_link) {
    current_link.classList.add('active')
  }
}