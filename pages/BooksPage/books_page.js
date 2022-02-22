import { list, read } from '../../api/book_api'
import { list as listPages } from '../../api/page_api'

let books = null
let total_books = 0
let pages_list_ul = null
let book_creation_date_span = null
let book_update_date_span = null
let book_owned_by_span = null
let book_created_by_span = null
let book_updated_by_span = null

async function showBook(e) {
  const book_response = await read(e.detail.book_id)
  const page_response = await listPages(e.detail.book_id)
  console.log(book_response)
  book_created_by_span.textContent = book_response.created_by.name
  book_creation_date_span.textContent = book_response.created_at
  book_update_date_span.textContent = book_response.updated_at
  book_owned_by_span.textContent = book_response.owned_by.name
  book_updated_by_span.textContent = book_response.updated_by.name

  for (const page of page_response.data) {
    const li = document.createElement('li')
    li.textContent = page.name
    pages_list_ul.appendChild(li)
  }
}

export async function onPageReady() {
  console.log('books page loaded')
  const response = await list()
  books = response.data
  total_books = response.total

  const total_books_number_span = document.getElementById('total-books-number')
  total_books_number_span.innerText = total_books

  const books_list_div = document.getElementById('books-list-div')
  pages_list_ul = document.getElementById('pages-list-ul')
  book_created_by_span = document.getElementById('book-created-by')
  book_update_date_span = document.getElementById('book-update-date')
  book_owned_by_span = document.getElementById('book-owned-by')
  book_updated_by_span = document.getElementById('book-updated-by')
  book_creation_date_span = document.getElementById('book-creation-date')

  for (const book of books) {
    const book_card = document.createElement('book-card')
    book_card.book = book
    book_card.addEventListener('show-book', showBook)
    books_list_div.appendChild(book_card)
  }
}