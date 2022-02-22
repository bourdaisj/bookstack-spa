import './style.css'
import { routes } from './router'
import { navigateTo } from './router'
import { BookCard } from './components/book_card/BookCard'
import BookCardTemplate from './components/book_card/book_card.html?raw'
import { BookView } from './components/book_view/BookView'
import BookViewTemplate from './components/book_view/book_view.html?raw'
import PageCardTemplate from './components/page_card/page_card.html?raw'
import { REMOVE_TOKEN_ID, REMOVE_TOKEN_SECRET } from './state'
import { PageCard } from './components/page_card/PageCard'

const templating = document.getElementById('templating')
const location = document.location

const book_card_fragment = document.createElement('div')
book_card_fragment.innerHTML = BookCardTemplate

const book_view_fragment = document.createElement('div')
book_view_fragment.innerHTML = BookViewTemplate

const page_card_fragment = document.createElement('div')
page_card_fragment.innerHTML = PageCardTemplate

templating.appendChild(book_card_fragment)
templating.appendChild(book_view_fragment)
templating.appendChild(page_card_fragment)
customElements.define('book-card', BookCard)
customElements.define('book-view', BookView)
customElements.define('page-card', PageCard)

const current_route = routes.find(route => route.path === location.pathname)

document.getElementById('clear-credentials-btn').addEventListener('click', () => {
  REMOVE_TOKEN_ID()
  REMOVE_TOKEN_SECRET()
})

navigateTo(current_route.name)