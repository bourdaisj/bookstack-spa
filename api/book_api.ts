import { Book } from '../entities/Book'
import { makeApiCall } from './core'

const endpoints = {
  list: 'books',
  read: (book_id: number) => `books/${book_id}`,
  delete: (book_id: number) => `books/${book_id}`
}

export async function list(): Promise<{ total : number, data: Array<Book> }> {
  const response = await makeApiCall(endpoints.list)
  const json = await response.json()
  const books = json.data.map((book_resource) => new Book(book_resource))

  return {
    data: books,
    total: json.total
  }
}

export async function read(book_id: number) {
  const response = await makeApiCall(endpoints.read(book_id))
  const payload = await response.json()
  return new Book(payload)
}

export function destroy(book_id: number) {
  return makeApiCall(endpoints.delete(book_id), 'DELETE')
}