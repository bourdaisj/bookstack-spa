import { capitalize } from '../utils/str'
import { isAuth } from '../state'
import routes from './routes'

const app = document.querySelector('#app')

const PAGE_DIRECTORY = '../pages'
const LAYOUT_DIRECTORY = '../layouts'

const current = {
  route: null,
  layout: {
    name: null,
    logic: null
  }
}

export async function navigateTo(route_name: string) {
  const matching_route = routes.find(route => route.name === route_name)

  if ((!isAuth() && !matching_route.meta.guest)) {
    navigateTo('login')
    return
  }
  
  if (isAuth() && matching_route.meta.guest) {
    return
  }

  const layout_name = matching_route.meta.layout ?? 'default'

  const capitalized_route_name = capitalize(matching_route.name)

  if (layout_name !== current.layout.name) {
    const layout_template_path = `${LAYOUT_DIRECTORY}/${layout_name}/layout.html?raw`
    const layout_logic_path = `${LAYOUT_DIRECTORY}/${layout_name}/layout.ts`
    const layout_template = await import(layout_template_path)
    current.layout.logic = await import(layout_logic_path)
    app.innerHTML = layout_template.default
    current.layout.logic.init(matching_route)
  }

  const page_full_path = `${PAGE_DIRECTORY}/${capitalized_route_name}Page/${matching_route.name}_page.html?raw`
  const page_full_logic_path = `${PAGE_DIRECTORY}/${capitalized_route_name}Page/${matching_route.name}_page.ts`

  const page_template = await import(page_full_path)
  const page_logic = await import(page_full_logic_path)

  document.querySelector('#layout-inner-slot').innerHTML = page_template.default
  page_logic.onPageReady()

  window.history.pushState(matching_route, matching_route.title, matching_route.path)

  current.route = matching_route
  current.layout.name = layout_name
  current.layout.logic.onNavigationComplete()
}
