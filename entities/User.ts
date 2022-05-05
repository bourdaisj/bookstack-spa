import { UserApiResource } from '../types'

export class User {
  id: number
  name: string
  slug: string
  email: string
  created_at: Date
  updated_at: Date
  external_auth_id: string
  user_id: number
  last_activity_at: Date
  profile_url: string
  edit_url: string
  avatar_url: string

  constructor(user_resource: UserApiResource) {
    this.id = user_resource.id
    this.name = user_resource.name
    this.slug = user_resource.slug
    this.email = user_resource.email
    this.created_at = new Date(user_resource.created_at)
    this.updated_at = new Date(user_resource.updated_at)
    this.external_auth_id = user_resource.external_auth_id
    this.user_id = user_resource.user_id
    this.last_activity_at = new Date(user_resource.last_activity_at)
    this.profile_url = user_resource.profile_url
    this.edit_url = user_resource.edit_url
    this.avatar_url = user_resource.avatar_url
  }
}