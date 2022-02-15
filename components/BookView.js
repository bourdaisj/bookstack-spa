export class BookView extends HTMLElement {
  constructor() {
    super()
    const template_content = document.getElementById('book-view').content
    this.shadow_root = this.attachShadow({ mode: 'open' })
    this.shadow_root.appendChild(template_content.cloneNode(true))

    // todo define targets
  }

  connectedCallback() {
    console.log('book view connected')
    const book = this.book
  }
}