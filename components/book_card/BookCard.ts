import { Book } from '../../entities/Book'

function emitEvent() {
  this.dispatchEvent(new CustomEvent('show-book', { bubbles: true, detail: {
    book_id: this.book.id
  }}))
}

export class BookCard extends HTMLElement {
  shadow_root: ShadowRoot
  book_name_span: HTMLSpanElement
  book_description_span: HTMLSpanElement
  book_created_at_span: HTMLSpanElement
  book: Book

  constructor() {
    super()
    const template_content = (document.getElementById('book-card') as HTMLTemplateElement).content
    this.shadow_root = this.attachShadow({ mode: 'open' })
    this.shadow_root.appendChild(template_content.cloneNode(true))

    this.book_name_span = this.shadow_root.querySelector('.book-name-span')
    this.book_description_span = this.shadow_root.querySelector('.book-description-span')
    this.book_created_at_span = this.shadow_root.querySelector('.book-created-at-span')
  }
  
  connectedCallback() {
    console.log('book card connected')
    const created_at_str = new Date(this.book.created_at).toLocaleDateString()

    this.book_name_span.innerHTML = this.book.name
    this.book_description_span.innerHTML = this.book.description
    this.book_created_at_span.innerHTML = created_at_str
    this.book_description_span.title = this.book.description

    this.addEventListener('click', emitEvent.bind(this))
  }
}