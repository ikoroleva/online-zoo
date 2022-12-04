// active style for header
const navItems = document.querySelectorAll('.list__item');

navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        navItems.forEach((el) => {
            el.classList.remove('active');
        })
        item.classList.add('active');
    })
})

// burger menu

const burgerMenu = document.querySelector('.burger-menu');
const modalNav = document.querySelector('.nav');
const modalClose = document.querySelector('.span__close_menu');

// open burger menu

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.add('opened');
    document.body.classList.add('locked');
    modalNav.classList.add('opened');
});

// close burger menu by clicking close span 

modalClose.addEventListener('click', (e) => {
    burgerMenu.classList.remove('opened');
    document.body.classList.remove('locked');
    modalNav.classList.remove('opened');
})
