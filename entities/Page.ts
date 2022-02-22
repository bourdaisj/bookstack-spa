import { PageApiResource } from '../types'

export class Page {
  id: number
  book_id: number
  chapter_id: number
  name: string
  slug: string
  created_at: Date
  updated_at: Date
  created_by: number
  updated_by: number
  owned_by: number

  constructor(page_resource: PageApiResource) {
    this.id = page_resource.id
    this.book_id = page_resource.book_id
    this.chapter_id = page_resource.chapter_id
    this.name = page_resource.name
    this.slug = page_resource.slug
    this.created_at = new Date(page_resource.created_at)
    this.updated_at = new Date(page_resource.updated_at)
    this.created_by = page_resource.created_by
    this.updated_by = page_resource.updated_by
    this.owned_by = page_resource.owned_by
  }
}