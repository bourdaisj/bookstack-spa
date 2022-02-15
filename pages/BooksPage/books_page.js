import { list } from '../../api/book_api'

let books = null
let total_books = 0

export async function onPageReady() {
  console.log('books page loaded')
  const response = await list()
  books = response.data
  total_books = response.total

  const total_books_number_span = document.getElementById('total-books-number')
  total_books_number_span.innerText = total_books

  const books_list_div = document.getElementById('books-list-div')

  for (const book of books) {
    const book_card = document.createElement('book-card')
    book_card.book = book
    books_list_div.appendChild(book_card)
  }
}