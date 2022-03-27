import { capitalize, pascalCase } from '../utils/str'
import { isAuth } from '../state'
import routes from './routes'

export interface INavigateToParams {
  route_name: string
  replace?: boolean
  params?: Record<string, unknown>
}

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

export async function navigateTo({ route_name, replace = false, params }: INavigateToParams) {
  const matching_route = routes.find(route => route.name === route_name)

  if ((!isAuth() && !matching_route.meta.guest)) {
    navigateTo({ route_name: 'login' })
    return
  }
  
  if (isAuth() && matching_route.meta.guest) {
    return
  }

  const layout_name = matching_route.meta.layout ?? 'default'

  const pascal_cased_route_name = pascalCase(matching_route.name)

  if (layout_name !== current.layout.name) {
    const layout_template_path = `${LAYOUT_DIRECTORY}/${layout_name}/layout.html?raw`
    const layout_logic_path = `${LAYOUT_DIRECTORY}/${layout_name}/layout.ts`
    const layout_template = await import(layout_template_path)
    current.layout.logic = await import(layout_logic_path)
    app.innerHTML = layout_template.default
    current.layout.logic.init(matching_route)
  }

  const page_full_path = `${PAGE_DIRECTORY}/${pascal_cased_route_name}Page/${matching_route.name}_page.html?raw`
  const page_full_logic_path = `${PAGE_DIRECTORY}/${pascal_cased_route_name}Page/${matching_route.name}_page.ts`

  const page_template = await import(page_full_path)
  const page_logic = await import(page_full_logic_path)

  document.querySelector('#layout-inner-slot').innerHTML = page_template.default
  page_logic.onPageReady(params)

  const history_func = replace ? window.history.replaceState : window.history.pushState

  let path = matching_route.path
  // clonable_matching_route exists because apparently window.history.replaceSTate or pushState won't be able to clone
  // the data parameters if it contains a property that was assigned a function, surely there are better workarounds
  // but for now this is doing the trick
  let clonable_matching_route = matching_route
  
  //! on refresh there is another bug with current_route being undefined, and incorrect style path
  if (typeof matching_route.path === 'function') {
    path = matching_route.path(params)
    clonable_matching_route = Object.assign({}, matching_route)
    clonable_matching_route.path = path
  }

  history_func.call(window.history, clonable_matching_route, matching_route.title, path)

  current.layout.logic.onNavigationComplete(matching_route, current.route)
  current.route = matching_route
  current.layout.name = layout_name
}
