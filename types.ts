export interface Tag {
  id: number
  name: string
  value: string
  order: number
}

export interface Book {
  id: number
  name: string
  slug: string
  description: string
  created_at: string
  updated_at: string
  created_by: { id: number, name: string }
  updated_by: { id: number, name: string }
  owned_by: { id: number, name: string }
  tags: Array<Tag>
  cover: {
    id: number
    name: string
    url: string
    created_at: string
    updated_at: string
    created_by: number
    updated_by: number
    path: string
    type: string
    uploaded_to: number
  }
}