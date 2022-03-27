import { read } from '../../api/book_api'
import { list } from '../../api/page_api'
import { PageCard } from '../../components/page_card/PageCard'
import { Book } from '../../entities/Book'
import { Page } from '../../entities/Page'

let book: Book = null
let pages: Page[] = null
let total_pages: number = null
let pages_list_div: HTMLDivElement = null
let book_created_by_span: HTMLSpanElement = null
let book_updated_at_span: HTMLSpanElement = null
let book_owned_by_span: HTMLSpanElement = null
let book_updated_by_span: HTMLSpanElement = null
let book_created_at_span: HTMLSpanElement = null

export async function onPageReady({ book_id }: { book_id: number }) {
  book = await read(book_id)
  const { data, total } = await list(book_id)
  pages = data
  total_pages = total

  pages_list_div = document.querySelector('#pages-list-div')
  book_created_by_span = document.getElementById('book-created-by')
  book_updated_at_span = document.getElementById('book-updated-at')
  book_owned_by_span = document.getElementById('book-owned-by')
  book_updated_by_span = document.getElementById('book-updated-by')
  book_created_at_span = document.getElementById('book-created-at')

  book_created_at_span.textContent = book.created_at.toLocaleDateString()
  book_updated_at_span.textContent = book.updated_at.toLocaleTimeString()
  book_created_by_span.textContent = book.created_at.toLocaleDateString()
  book_owned_by_span.textContent = book.owned_by.name
  book_updated_by_span.textContent = book.updated_by.name

  for (const page of pages) {
    const page_card = document.createElement('page-card') as PageCard
    page_card.page = page
    page_card.dataset['id'] = String(page.id)
    pages_list_div.appendChild(page_card)
  }
}