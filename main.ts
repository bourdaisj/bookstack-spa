import './style/global.css'
import './style/index.css'
import routes from './router/routes'
import { navigateTo } from './router'
import { BookCard } from './components/book_card/BookCard'
import { PageCard } from './components/page_card/PageCard'
import { DataTable } from './components/data_table/DataTable'
import BookCardTemplate from './components/book_card/book_card.html?raw'
import PageCardTemplate from './components/page_card/page_card.html?raw'
import DataTableTemplate from './components/data_table/data_table.html?raw'

const templating = document.getElementById('templating')
const location = document.location

const book_card_fragment = document.createElement('div')
book_card_fragment.innerHTML = BookCardTemplate

const page_card_fragment = document.createElement('div')
page_card_fragment.innerHTML = PageCardTemplate

const data_table_fragment = document.createElement('div')
data_table_fragment.innerHTML = DataTableTemplate

templating.appendChild(book_card_fragment)
templating.appendChild(page_card_fragment)
templating.appendChild(data_table_fragment)
customElements.define('book-card', BookCard)
customElements.define('page-card', PageCard)
customElements.define('data-table', DataTable)

const current_route = routes.find(route => route.path === location.pathname)

navigateTo({ route_name: current_route.name })

window.addEventListener('popstate', () => {
  const route = routes.find(route => route.path === location.pathname)
  navigateTo({ route_name: route.name, replace: true })
})