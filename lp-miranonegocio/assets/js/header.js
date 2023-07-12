const HAMBURGUER = document.querySelector('.navbar__hamburguer');
const MENU = document.querySelector('.navbar__overlay');
const CLOSE = document.querySelector('.overlay__close');

HAMBURGUER.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

CLOSE.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

const LINK1 = document.querySelector('.anchor1');

LINK1.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

const LINK2 = document.querySelector('.anchor2');

LINK2.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

const LINK3 = document.querySelector('.anchor3');

LINK3.addEventListener('click', () => {
    MENU.classList.toggle('open');
})