
const nav = document.querySelector('#header nav')
nav.ele

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

// services section img
const imgs = document.querySelectorAll('#services .img-service img')
const texts = document.querySelectorAll('#services .img-service p')


for(const img of imgs){
  img.addEventListener('mouseover', function(){
    img.classList.add('text') 
    for(const text of texts){
      text.classList.add('inside-text')
    }
  })
  img.addEventListener('mouseout', function(){
    img.classList.remove('text')
    for(const text of texts){
      text.classList.remove('inside-text')
    }
  })
}
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  moousewheel: true, 
  keyboard: true.valueOf, 
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 800, 
  reset: true, 
})

scrollReveal.reveal(`
#home .image, #home .text,
.section-divider,
#about .about-img, #about .text,
#services h2,#services .img-service, .img-one, .img-two, .img-three, .img-four,
#localization h2, #localization .stores,

`, {delay: 500, transition: 100})
