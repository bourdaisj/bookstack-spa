import { makeApiCall } from './core'

export type DeletableType = 'book';

const endpoints = {
  list: 'recycle-bin',
  restore: (deletion_id: number) => `recycle-bin/${deletion_id}`,
}

export async function list(deletable_type: DeletableType, deletable_id: number) {
  const query_string = `?filter[deletable_type]=${deletable_type}&filter[deletable_id]=${deletable_id}`
  const response = await makeApiCall(`${endpoints.list}${query_string}`)
  return response.json()
}

export function restore(deletion_id: number) {
  return makeApiCall(endpoints.restore(deletion_id), 'PUT')
}

export default {
  list,
  restore
}