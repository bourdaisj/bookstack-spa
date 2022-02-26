import { navigateTo } from '../../router'

let books_btn = null

export function onPageReady() {
  console.log('home page loaded')
  books_btn = document.getElementById('books-btn')
  books_btn.addEventListener('click', () => navigateTo('books'))
}
  