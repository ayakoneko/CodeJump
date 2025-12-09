/* hamburger menu*/

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


/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        if (targetID === '#') return;

        const target = document.querySelector(targetID);
        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth' });
    });
});


/* fade-in when in view */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.fadein').forEach(el => {
    observer.observe(el);
});


/* hero zoom */
const heroImage = document.getElementById('hero');

function mvScale(){
    const scroll = window.scrollY;
    if (window.innerWidth > 900){
        heroImage.style.transform = `scale(${1 + scroll / 3000})`;
    } else{
        heroImage.style.transform = `scale(${1 - scroll / 8000})`;
    }
}

window.addEventListener('scroll', mvScale);


/* side button */
const sideBtn    = document.getElementById('side-btn');
const galleryPos = document.getElementById('gallery').offsetTop;
const accessPos  = document.getElementById('access').offsetTop;

function updateSideButton() {
    const scroll = window.scrollY;

    if (window.innerWidth > 900 && scroll > galleryPos && scroll < accessPos) {
        sideBtn.style.transform = 'rotate(-90deg) translateY(0)'; // show
    } else {
        sideBtn.style.transform = 'rotate(-90deg) translateY(60px)'; // hide (move down)
    }
}

window.addEventListener('scroll', updateSideButton);
window.addEventListener('resize', updateSideButton);
updateSideButton();



/* logo & hamburger */
const logo = document.querySelector('.site-title');

function fadeShow(el) {
    el.style.opacity = 1;
    el.style.pointerEvents = 'auto';}

function fadeHide(el) {
    el.style.opacity = 0;
    el.style.pointerEvents = 'none';}

function updateLogoHam() {
    const scroll = window.scrollY;

    if (scroll > 520) {
        fadeShow(logo);
        fadeShow(hamburger);
    } else {
        fadeHide(logo);
        fadeHide(hamburger);
    }
}

window.addEventListener('scroll', updateLogoHam);
updateLogoHam();



/* BG image */
const bg = document.querySelector('.bg');
const gallery = document.getElementById('gallery');
const galleryEnd = gallery.offsetTop + gallery.offsetHeight;
const contactPos = document.getElementById('contact').offsetTop;

function updateBGimage() {
    const scroll = window.scrollY;

    if (scroll > galleryEnd && scroll < contactPos){
        bg.style.opacity = 1;
    } else{
        bg.style.opacity = 0;
    }
}

window.addEventListener('scroll', updateBGimage);
window.addEventListener('resize', () => {
    galleryEnd = gallery.offsetTop + gallery.offsetHeight;
    contactPos = document.getElementById('contact').offsetTop;
    updateBGimage();
});
updateBGimage();