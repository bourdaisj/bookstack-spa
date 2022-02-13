export class BookCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrapper')

    this.book_name_span = wrapper.appendChild(document.createElement('span'))
    this.book_description_span = wrapper.appendChild(document.createElement('span'))
    this.book_created_at_span = wrapper.appendChild(document.createElement('span'))
    this.book_updated_at_span = wrapper.appendChild(document.createElement('span'))
      
    this.book_name_span.setAttribute('class', 'book-name-span')
    this.book_description_span.setAttribute('class', 'book-description-span')
    this.book_created_at_span.setAttribute('class', 'book-created-at-span')
    this.book_updated_at_span.setAttribute('class', 'book-updated-at-span')

    this.shadowRoot.append(wrapper)
  }

  connectedCallback() {
    console.log('book card connected')
    const created_at_str = new Date(this.book.created_at).toLocaleDateString()
    const updated_at_str = new Date(this.book.updated_at).toLocaleDateString()

    this.book_name_span.innerHTML = `${this.book.name}&nbsp;`
    this.book_description_span.innerHTML = `${this.book.description}&nbsp;`
    this.book_created_at_span.innerHTML = `${created_at_str}&nbsp;`
    this.book_updated_at_span.innerHTML = `${updated_at_str}&nbsp;`
  }
}