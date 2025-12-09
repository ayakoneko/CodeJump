const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('#navi');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
});

const naviMenu = document.querySelectorAll('#navi .menu a');

naviMenu.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navi.classList.remove('active');
    });
});
