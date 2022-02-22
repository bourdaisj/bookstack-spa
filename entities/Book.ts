import { BookApiResource } from '../types'

export class Book {
  id: number
  name: string
  slug: string
  description: string
  created_at: Date
  updated_at: Date
  created_by: { id: number, name: string }
  updated_by: { id: number, name: string }
  owned_by: { id: number, name: string }

  constructor(book_resource: BookApiResource) {
    this.id = book_resource.id
    this.name = book_resource.name
    this.slug = book_resource.slug
    this.description = book_resource.description
    this.created_at = new Date(book_resource.created_at)
    this.updated_at = new Date(book_resource.updated_at)
    this.created_by = book_resource.created_by
    this.updated_by = book_resource.updated_by
    this.owned_by = book_resource.owned_by
  }
}