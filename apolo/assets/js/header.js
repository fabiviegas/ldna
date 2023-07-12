/* LANGUAGE CONTROLS */
const LANG = document.querySelector('#js-language');
const LANG_ALTERNATE = document.querySelector('#js-language-alternate');

LANG.addEventListener('mouseover', () => {
    LANG_ALTERNATE.style.display = "block";
});
LANG.addEventListener('mouseout', () => {
    LANG_ALTERNATE.style.display = "none";
});

/* LANGUAGE CONTROLS 2 */
const LANGD = document.querySelector('#js-language-d');
const LANG_ALTERNATED = document.querySelector('#js-language-alternate-d');

LANGD.addEventListener('mouseover', () => {
    LANG_ALTERNATED.style.display = "block";
});
LANGD.addEventListener('mouseout', () => {
    LANG_ALTERNATED.style.display = "none";
});

/* MENU */

const HAMBURGUER = document.querySelector('.navbar__hamburguer');
const MENU = document.querySelector('.navbar__overlay');
const CLOSE = document.querySelector('.overlay__close');

HAMBURGUER.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

CLOSE.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

const BURGERDESK = document.querySelector('.navbar__hamburguer__desk');
const MENUDESK = document.querySelector('.navbar__overlay__desk');
const CLOSEDESK = document.querySelector('.overlay__close__desk');

BURGERDESK.addEventListener('click', () => {
    MENUDESK.classList.toggle('open');
})

CLOSEDESK.addEventListener('click', () => {
    MENUDESK.classList.toggle('open');
})