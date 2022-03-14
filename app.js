const nav = document.querySelector('#header nav')

const toggle = document.querySelector('nav .toggle')
const close = document.querySelector('nav .close');

toggle.addEventListener('click', function(){
  nav.classList.toggle('show')
})

close.addEventListener('click', function(){
  nav.classList.toggle('show')
})