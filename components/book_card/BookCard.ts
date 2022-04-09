import { Book } from '../../entities/Book'
import { emitEvent } from '../../utils/events'

export class BookCard extends HTMLElement {
  shadow_root: ShadowRoot
  book_name_span: HTMLSpanElement
  book_description_span: HTMLSpanElement
  book_created_at_span: HTMLSpanElement
  delete_book_button: HTMLButtonElement
  show_book_button: HTMLButtonElement
  book: Book

  constructor() {
    super()
    const template_content = (document.getElementById('book-card') as HTMLTemplateElement).content
    this.shadow_root = this.attachShadow({ mode: 'open' })
    this.shadow_root.appendChild(template_content.cloneNode(true))

    this.book_name_span = this.shadow_root.querySelector('.book-name-span')
    this.book_description_span = this.shadow_root.querySelector('.book-description-span')
    this.book_created_at_span = this.shadow_root.querySelector('.book-created-at-span')
    this.delete_book_button = this.shadow_root.querySelector('.delete-book-button')
    this.show_book_button = this.shadow_root.querySelector('.show-book-button')
  }
  
  connectedCallback() {
    console.log('book card connected')
    const created_at_str = new Date(this.book.created_at).toLocaleDateString()

    this.book_name_span.innerHTML = this.book.name
    this.book_description_span.innerHTML = this.book.description
    this.book_created_at_span.innerHTML = created_at_str
    this.book_description_span.title = this.book.description

    this.show_book_button.addEventListener('click', emitEvent.bind(this, { 
      event_name: 'show-book',
      payload: {
        book_id: this.book.id
      }
    }))

    this.delete_book_button.addEventListener('click', emitEvent.bind(this, { 
      event_name: 'delete-book', 
      payload: { 
        book_id: this.book.id
      }
    }))
  }
}