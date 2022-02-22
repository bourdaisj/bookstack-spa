import type { Book } from '../../types'

export class BookView extends HTMLElement {
  shadow_root: ShadowRoot
  book: Book

  constructor() {
    super()
    const template_content = (document.getElementById('book-view') as HTMLTemplateElement).content
    this.shadow_root = this.attachShadow({ mode: 'open' })
    this.shadow_root.appendChild(template_content.cloneNode(true))

    // todo define targets
  }

  connectedCallback() {
    console.log('book view connected')
    const book = this.book
  }
}