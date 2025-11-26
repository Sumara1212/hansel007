//toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di klik
const hamburger = document.querySelector('#hamburger-menu');
hamburger.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

//klik di luar sidebar untuk menghilangkan navbar
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
