const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
window.onscroll(() => {
    nav.classList.remove('active');
});