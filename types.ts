export interface TagApiResource {
  id: number
  name: string
  value: string
  order: number
}

export interface PageApiResource {
  id: number
  name: string
  book_id: number
  chapter_id: number
  slug: string
  created_at: string
  updated_at: string
  created_by: number
  updated_by: number
  owned_by: number
}

export interface BookApiResource {
  id: number
  name: string
  slug: string
  description: string
  created_at: string
  updated_at: string
  created_by: { id: number, name: string }
  updated_by: { id: number, name: string }
  owned_by: { id: number, name: string }
}

export interface UserApiResource {
  id: number
  name: string
  slug: string
  email: string
  created_at: string
  updated_at: string
  external_auth_id: string
  user_id: number
  last_activity_at: string
  profile_url: string
  edit_url: string
  avatar_url: string
}

export type ActionType = 'success' | 'danger' | 'info' | 'warning'