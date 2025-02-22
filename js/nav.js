const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.nav__list-item');
const body = document.body;

headerBurger.addEventListener('click', function() {  
    headerNav.classList.toggle('header__nav--show');
    body.classList.toggle('modal-open');
    navItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            headerNav.classList.remove('header__nav--show');
            body.classList.remove('modal-open');
        });
    });
});