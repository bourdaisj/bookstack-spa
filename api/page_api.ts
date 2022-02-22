import { Page } from '../entities/Page'
import { makeApiCall } from './core'

const endpoints = {
  list: 'pages',
}

export async function list(book_id: number): Promise<{ data: Array<Page>, total: number }> {
  const query_string = `?filter[book_id]=${book_id}`
  const response = await makeApiCall(`${endpoints.list}${query_string}`)
  const payload = await response.json()
  
  return {
    data: payload.data.map((page_resource) => new Page(page_resource)),
    total: payload.total
  }
}