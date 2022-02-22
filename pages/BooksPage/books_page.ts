import { list, read } from '../../api/book_api'
import { list as listPages } from '../../api/page_api'
import { BookCard } from '../../components/book_card/BookCard'
import { BookView } from '../../components/book_view/BookView'

let books = null
let total_books = 0

let book_views_div = null

async function showBook(e) {
  const book = await read(e.detail.book_id)
  const { data: pages } = await listPages(e.detail.book_id)

  const book_view = document.createElement('book-view') as BookView
  book_view.book = book
  book_view.pages = pages
  book_views_div.appendChild(book_view)
}

export async function onPageReady() {
  const response = await list()
  books = response.data
  total_books = response.total

  const total_books_number_span = document.getElementById('total-books-number')
  total_books_number_span.innerText = String(total_books)

  const books_list_div = document.getElementById('books-list-div')
  book_views_div = document.getElementById('book-views-div')

  for (const book of books) {
    const book_card = document.createElement('book-card') as BookCard
    book_card.book = book
    book_card.addEventListener('show-book', showBook)
    books_list_div.appendChild(book_card)
  }
}