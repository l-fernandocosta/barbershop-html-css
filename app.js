const nav = document.querySelector('#header nav')

const toggle = document.querySelector('nav .toggle');
const close = document.querySelector('nav .close');
const links = document.querySelectorAll('nav ul li a');

toggle.addEventListener('click', function(){
  nav.classList.toggle('show')
});

close.addEventListener('click', function(){
  nav.classList.toggle('show')
});

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  });
}