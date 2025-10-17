const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

const setMenuState = (isOpen) => {
    if (!hamburger || !mobileMenu) {
        return;
    }

    hamburger.classList.toggle('is-active', isOpen);
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
};

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        const shouldOpen = !mobileMenu.classList.contains('is-open');
        setMenuState(shouldOpen);
    });

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false);
        }
    });

    setMenuState(false);
}

document.addEventListener('contextmenu', (event) => {
    const targetImage = event.target.closest('img');
    if (targetImage) {
        event.preventDefault();
    }
});
