const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di klik
const hamburger = document.querySelector('#hamburger-menu');
hamburger.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

//untuk memunculkan search button
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
});

//untuk memunculkan shopping-cart
const shoppingCartBtn = document.getElementById('shopping-cart-button');

const shoppingCartList = document.querySelector('.shopping-cart');

shoppingCartBtn.addEventListener('click', (e) => {
   shoppingCartList.classList.toggle('active');
   e.preventDefault();
});

//klik di luar elemen untuk menghilangkan navbar dan search
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if(!shoppingCartBtn.contains(e.target) && !shoppingCartList.contains(e.target)) {
        shoppingCartList.classList.remove('active');
    }
});

//untuk menampilkan modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    })
});


//klik tombol close
const closeIcon = document.querySelector('.modal .close-icon');
closeIcon.addEventListener('click', function(e) {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
})

//untuk menghilangkan modal tanpa tekan tombol x
document.addEventListener('click', (e) => {
    if(e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
})