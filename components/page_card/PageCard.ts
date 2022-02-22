import { Page } from '../../entities/Page'

export class PageCard extends HTMLElement {
  shadow_root: ShadowRoot
  page: Page
  page_name_div: HTMLDivElement
  page_created_by_span: HTMLSpanElement
  page_updated_at_span: HTMLSpanElement
  page_owned_by_span: HTMLSpanElement
  page_updated_by_span: HTMLSpanElement
  page_created_at_span: HTMLSpanElement

  constructor() {
    super()
    const template_content = (document.getElementById('page-card') as HTMLTemplateElement).content
    this.shadow_root = this.attachShadow({ mode: 'open' })
    this.shadow_root.appendChild(template_content.cloneNode(true))

    this.page_name_div = this.shadow_root.querySelector('#page-name')
    this.page_updated_at_span = this.shadow_root.getElementById('page-updated-at')
    this.page_created_at_span = this.shadow_root.getElementById('page-created-at')
  }

  connectedCallback() {
    this.page_name_div.textContent = this.page.name
    this.page_created_at_span.textContent = this.page.created_at.toLocaleDateString()
    this.page_updated_at_span.textContent = this.page.updated_at.toLocaleTimeString()
  }
}