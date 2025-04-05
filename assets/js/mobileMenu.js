const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.sub-menu ul li a')


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
    
});

document.querySelectorAll('.sub-menu ul li a').forEach(a => {
    a.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-open');
    });
});