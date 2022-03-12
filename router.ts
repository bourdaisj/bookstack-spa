import { capitalize } from './utils/str'
import { isAuth } from './state'

const app = document.querySelector('#app')

export const routes = [
  { 
    path: '/', 
    name: 'home', 
    title: 'Home',
    meta: {
      guest: false
    }
  },
  { 
    path: '/login', 
    name: 'login', 
    title: 'Login',
    meta: {
      guest: true,
      layout: 'login'
    }
  },
  { 
    path: '/books', 
    name: 'books', 
    title: 'Books',
    meta: {
      guest: false
    } 
  },
  { 
    path: '/users', 
    name: 'users', 
    title: 'Users',
    meta: {
      guest: false
    } 
  },
  { 
    path: '/attachments', 
    name: 'attachments', 
    title: 'Attachments',
    meta: {
      guest: false
    } 
  },
  { 
    path: '/shelves', 
    name: 'shelves', 
    title: 'Shelves',
    meta: {
      guest: false
    } 
  },
  { 
    path: '/chapters', 
    name: 'chapters', 
    title: 'Chapters',
    meta: {
      guest: false
    } 
  },
]

export const current = {
  route: null,
  layout_name: null
}

export async function navigateTo(route_name) {
  const matching_route = routes.find(route => route.name === route_name)

  if ((!isAuth() && !matching_route.meta.guest)) {
    navigateTo('login')
    return
  }
  
  if (isAuth() && matching_route.meta.guest) {
    return
  }

  const layout_name = matching_route.meta.layout ?? 'default'

  const prefix = './pages'
  const layout_prefix = './layouts'

  const capitalized_name = capitalize(matching_route.name)

  if (layout_name !== current.layout_name) {
    const layout_template_path = `${layout_prefix}/${layout_name}/layout.html?raw`
    const layout_logic_path = `${layout_prefix}/${layout_name}/layout.ts`
    const layout_template = await import(layout_template_path)
    const layout_logic = await import(layout_logic_path)
    app.innerHTML = layout_template.default
    layout_logic.onLayoutReady()
  }

  const page_full_path = `${prefix}/${capitalized_name}Page/${matching_route.name}_page.html?raw`
  const page_full_logic_path = `${prefix}/${capitalized_name}Page/${matching_route.name}_page.ts`

  const page_template = await import(page_full_path)
  const page_logic = await import(page_full_logic_path)

  document.querySelector('#layout-inner-slot').innerHTML = page_template.default
  page_logic.onPageReady()

  window.history.pushState(matching_route, matching_route.title, matching_route.path)

  current.route = matching_route
  current.layout_name = layout_name
}
