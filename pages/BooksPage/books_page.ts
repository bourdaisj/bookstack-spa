import { destroy, list, restore } from '../../api/book_api'
import { BookCard } from '../../components/book_card/BookCard'
import { Book } from '../../entities/Book'
import { showSnackbar } from '../../layouts/default/layout'
import { navigateTo } from '../../router'
import { removeById } from '../../utils/arr'

let books: Book[] = null
let total_books = 0

async function showBook(e) {
  navigateTo({ 
    route_name: 'book_show', 
    params: {
      book_id: e.detail.book_id
    } 
  })
}

async function deleteBook({ detail: { book_id }}: CustomEvent<{ book_id: number }>) {
  try {
    await destroy(book_id)
    removeById(books, book_id)
    document.querySelector(`[data-id="${book_id}"]`).remove()

    showSnackbar({
      content: 'Book deleted with success',
      type: 'success',
      options: {
        undo: restore.bind(null, book_id)
      }
    })
  } catch (error) {
    showSnackbar({
      content: 'Failed to delete the book',
      type: 'danger',
    })
  }
}

export async function onPageReady() {
  ({ data: books, total: total_books} = await list())

  const total_books_number_span = document.getElementById('total-books-number')
  total_books_number_span.innerText = String(total_books)

  const books_list_div = document.getElementById('books-list-div')

  for (const book of books) {
    const book_card = document.createElement('book-card') as BookCard
    book_card.book = book
    book_card.dataset['id'] = String(book.id)
    book_card.addEventListener('show-book', showBook)
    book_card.addEventListener('delete-book', deleteBook)
    books_list_div.appendChild(book_card)
  }
}