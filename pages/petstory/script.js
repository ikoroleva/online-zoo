const navItems = document.querySelectorAll('.list__item');

navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        navItems.forEach((el) => {
            el.classList.remove('active');
        })
        item.classList.add('active');
    })
})