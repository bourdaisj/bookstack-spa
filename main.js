import './style.css'
import { routes } from './router'
import { navigateTo } from './router'
import { BookCard } from './components/book_card/BookCard'
import BookCardTemplate from './components/book_card/book_card.html?raw'
import { BookView } from './components/book_view/BookView'
import BookViewTemplate from './components/book_view/book_view.html?raw'
import { REMOVE_TOKEN_ID, REMOVE_TOKEN_SECRET } from './state'

const templating = document.getElementById('templating')
const location = document.location

const fragment_card = document.createElement('div')
fragment_card.innerHTML = BookCardTemplate

const fragment_view = document.createElement('div')
fragment_view.innerHTML = BookViewTemplate

templating.appendChild(fragment_card)
templating.appendChild(fragment_view)
customElements.define('book-card', BookCard)
customElements.define('book-view', BookView)

const current_route = routes.find(route => route.path === location.pathname)

document.getElementById('clear-credentials-btn').addEventListener('click', () => {
  REMOVE_TOKEN_ID()
  REMOVE_TOKEN_SECRET()
})

navigateTo(current_route.name)