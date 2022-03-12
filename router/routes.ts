export default [
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