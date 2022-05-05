export interface IHeader {
  title: string
  value: string
}

export class DataTable extends HTMLElement {
  shadow_root: ShadowRoot
  headers: IHeader[]
  items: unknown[]
  table_title_caption: HTMLTableCaptionElement
  table_headers_row: HTMLTableRowElement
  table_body: HTMLTableRowElement

  constructor() {
    super()
    const template_content = (document.getElementById('data-table') as HTMLTemplateElement).content
    this.shadow_root = this.attachShadow({ mode: 'open' })
    this.shadow_root.appendChild(template_content.cloneNode(true))

    this.table_title_caption = this.shadow_root.getElementById('table-title') as HTMLTableCaptionElement
    this.table_headers_row = this.shadow_root.getElementById('table-headers-row') as HTMLTableRowElement
    this.table_body = this.shadow_root.getElementById('table-body') as HTMLTableRowElement
  }
  
  connectedCallback() {
    //todo
  }
  
  attributeChangedCallback() {
    // TODO
  }
  
  setHeaders(headers: IHeader[]) {
    headers.map((header) => {
      const td = document.createElement('td')
      td.textContent = header.title
      return td
    }).forEach((td) => {
      this.table_headers_row.appendChild(td)
    })
  }
}