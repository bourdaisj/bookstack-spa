import { makeApiCall } from './core'

const endpoints = {
  list: 'books',
  read: (book_id) => `books/${book_id}`
}

export async function list() {
  const response = await makeApiCall(endpoints.list)
  return response.json()
}

export async function read(book_id: number) {
  const response = await makeApiCall(endpoints.read(book_id))
  return response.json()
}