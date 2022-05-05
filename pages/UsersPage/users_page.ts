import { list } from '../../api/user_api'
import { DataTable } from '../../components/data_table/DataTable'
import { User } from '../../entities/User'

let users: User[] = null
let total_users = 0

export async function onPageReady() {
  ({ data: users, total: total_users} = await list())
  const data_table = document.querySelector('data-table') as DataTable
  const headers = [
    {
      title: 'Name',
      value: 'name'
    },
    {
      title: 'Email',
      value: 'email'
    }
  ]
  data_table.setHeaders(headers)
}