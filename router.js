import { capitalize } from "./utils/str";
import { isAuth } from "./state";

const app = document.querySelector('#app');

export const routes = [
  { 
    path: '/', 
    name: 'home', 
    title: "Home",
    meta: {
      guest: false
    }
  },
  { 
    path: '/login', 
    name: 'login', 
    title: "Login",
    meta: {
      guest: true
    }
  },
  { 
    path: '/books', 
    name: 'books', 
    title: "Book List",
    meta: {
      guest: false
    } 
  }
];

export async function navigateTo(route_name) {
  const matching_route = routes.find(route => route.name === route_name)

  if ((!isAuth() && !matching_route.meta.guest)) {
    navigateTo('login')
    return
  }
  
  if (isAuth() && matching_route.meta.guest) {
    return
  }

  const prefix = "./pages";

  const capitalized_name = capitalize(matching_route.name);

  const full_path = `${prefix}/${capitalized_name}Page/${matching_route.name}_page.html?raw`
  const full_logic_path = `${prefix}/${capitalized_name}Page/${matching_route.name}_page.js`

  let template = await import(full_path)
  let logic = await import(full_logic_path)

  app.innerHTML = template.default;
  logic.onPageReady()

  window.history.pushState(matching_route, matching_route.title, matching_route.path)
}
