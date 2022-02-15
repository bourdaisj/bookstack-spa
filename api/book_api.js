import { makeApiCall } from './core'

const endpoints = {
  list: 'books',
}

export async function list() {
  const response = await makeApiCall(endpoints.list)
  return response.json()
}