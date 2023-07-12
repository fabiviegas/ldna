// FAQ
const FAQ = document.querySelectorAll('.question__title');

FAQ.forEach(faqquestion => {
    faqquestion.addEventListener('click', e => {
        faqquestion.classList.toggle('active');
    })
})