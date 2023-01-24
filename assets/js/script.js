const burgerBtn = document.querySelector('.burger'),
      navList = document.querySelector('.nav-list'),
      bodyHTML = document.body,
      navLink = document.querySelectorAll('.nav-menu__link');

burgerBtn.addEventListener('click', () => {
    navList.classList.toggle('menu--visible');
    burgerBtn.classList.toggle('burger--close');
    bodyHTML.classList.toggle('cover');
    bodyHTML.classList.toggle('stop-scroll');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('menu--visible');
        burgerBtn.classList.remove('burger--close');
        bodyHTML.classList.remove('cover');
        bodyHTML.classList.remove('stop-scroll');
    });
});