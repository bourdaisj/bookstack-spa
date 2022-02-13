import './style.css'
import { routes } from './router';
import { navigateTo } from './router';
import { BookCard } from './components/BookCard';

const location = document.location;
customElements.whenDefined('book-card').then(() => {
  console.log("book-card defined")
})

customElements.define('book-card', BookCard)

const current_route = routes.find(route => route.path === location.pathname)

navigateTo(current_route.name)
