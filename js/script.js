let btn = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

document.addEventListener('click', e => {
    if (e.target.matches('.nav-link')) {
        if (
            document
                .querySelector('.navbar-toggler')
                .getAttribute('aria-expanded')
        ) {
            btn.setAttribute('aria-expanded', 'false');
            btn.classList.add('collapsed');
            navbarCollapse.classList.remove('show');
        }
    }
});
