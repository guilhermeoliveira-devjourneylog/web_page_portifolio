// swiper js (testimonial section)
const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});


const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// show menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

// hide menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

// remove active class from nav items
const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

// add active class to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active');
  })
})


// read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
    readMoreBtn.textContent = "Show less";
  } else {
    readMoreBtn.textContent = "Show more";
  }
})


// show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
  skill.querySelector('.head').addEventListener('click', () => {
    skill.querySelector('.items').classList.toggle('show-items');
  })
})


// add box shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})


// Seleciona o botão
var dropdownButton = document.querySelector('.dropdown-toggle');

// Adiciona um evento de clique ao botão
dropdownButton.addEventListener('click', function() {
  // Seleciona a lista suspensa
  var dropdownMenuLink = document.querySelector('.dropdown-menu');
  // Alterna a classe 'show' da lista suspensa
  dropdownMenuLink.classList.toggle('show');
});

// Adiciona um evento de clique à janela inteira
window.addEventListener('click', function(event) {
  // Se a lista suspensa estiver exibida e o usuário clicar fora dela, oculte-a com um atraso de 100 milissegundos
  if (event.target !== dropdownButton && dropdownMenuLink.classList.contains('show')) {
    setTimeout(function() {
      dropdownMenuLink.classList.remove('show');
    }, 100);
  }
});
