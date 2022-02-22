import { makeApiCall } from './core'

const endpoints = {
  list: 'pages',
}

export async function list(book_id: number) {
  const query_string = `?filter[book_id]=${book_id}`

  const response = await makeApiCall(`${endpoints.list}${query_string}`)
  return response.json()
}