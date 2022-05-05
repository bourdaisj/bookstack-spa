import { User } from '../entities/User'
import { makeApiCall } from './core'

const endpoints = {
  list: 'users',
}

export async function list(): Promise<{ total : number, data: Array<User> }> {
  const response = await makeApiCall(endpoints.list)
  const json = await response.json()
  const users = json.data.map((user_resource) => new User(user_resource))

  return {
    data: users,
    total: json.total
  }
}
