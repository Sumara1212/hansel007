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

/*untuk menampilkan modal
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
})*/

//untuk menmpilkan modal dinamis
const itemDetailModal = document.getElementById('item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();

        const parent = e.target.closest('.product-card'); //cari element induk terdekat si e yang punya class product-card
        const gambar = parent.querySelector('.product-image img').src;
        const title = parent.querySelector('.product-content h3').innerHTML;
        const harga = parent.querySelector('.product-price').innerHTML;
        const diskon = parent.querySelector('.product-price span').innerHTML;

        document.querySelector('.modal-title').innerHTML = title;

        const image = document.createElement('img');
        image.src = gambar;
        image.style.height = '10rem';
        document.querySelector('.modal-gambar').innerHTML = '';
        document.querySelector('.modal-gambar').append(image);
        document.querySelector('.modal-harga').innerHTML = harga;
        document.querySelector('.modal-diskon').innerHTML = diskon;
    })
});

//untuk menghilangkan modal ketika tombol close ditekan
const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
});

//untuk menghilangkan modal tanpa tekan tombol x(close-icon)
document.addEventListener('click', (e) => {
    if(e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
})