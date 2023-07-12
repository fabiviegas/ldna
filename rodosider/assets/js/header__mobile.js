const HAMBURGUER = document.querySelector('.navbar__hamburguer');
const MENU = document.querySelector('.navbar__overlay');
const CLOSE = document.querySelector('.overlay__close');

HAMBURGUER.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

CLOSE.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

const SEARCH = document.querySelector('.navbar__search');
const MENUSEARCH = document.querySelector('.overlay__search');
const CLOSESEARCH = document.querySelectorAll('section', 'footer', 'header');

SEARCH.addEventListener('click', () => {
    MENUSEARCH.classList.toggle('open');
})

CLOSESEARCH.forEach((item) => {
    item.addEventListener('click', () => {
        MENUSEARCH.classList.remove('open');
    })
})