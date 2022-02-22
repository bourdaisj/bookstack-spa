import { Book } from '../../entities/Book'
import { Page } from '../../entities/Page'
import { PageCard } from '../page_card/PageCard'

function showPage(e) {
  //todo
}
export class BookView extends HTMLElement {
  shadow_root: ShadowRoot
  book: Book
  pages: Array<Page>
  pages_list_div: HTMLDivElement
  book_created_by_span: HTMLSpanElement
  book_updated_at_span: HTMLSpanElement
  book_owned_by_span: HTMLSpanElement
  book_updated_by_span: HTMLSpanElement
  book_created_at_span: HTMLSpanElement

  constructor() {
    super()
    const template_content = (document.getElementById('book-view') as HTMLTemplateElement).content
    this.shadow_root = this.attachShadow({ mode: 'open' })
    this.shadow_root.appendChild(template_content.cloneNode(true))

    this.pages_list_div = this.shadow_root.querySelector('#pages-list-div')
    this.book_created_by_span = this.shadow_root.getElementById('book-created-by')
    this.book_updated_at_span = this.shadow_root.getElementById('book-updated-at')
    this.book_owned_by_span = this.shadow_root.getElementById('book-owned-by')
    this.book_updated_by_span = this.shadow_root.getElementById('book-updated-by')
    this.book_created_at_span = this.shadow_root.getElementById('book-created-at')
  }

  connectedCallback() {
    this.book_created_at_span.textContent = this.book.created_at.toLocaleDateString()
    this.book_updated_at_span.textContent = this.book.updated_at.toLocaleTimeString()
    this.book_created_by_span.textContent = this.book.created_at.toLocaleDateString()
    this.book_owned_by_span.textContent = this.book.owned_by.name
    this.book_updated_by_span.textContent = this.book.updated_by.name

    for (const page of this.pages) {
      const page_card = document.createElement('page-card') as PageCard
      page_card.page = page
      this.pages_list_div.appendChild(page_card)
      page_card.addEventListener('show-page', showPage)
      this.pages_list_div.appendChild(page_card)
    }
  }
}