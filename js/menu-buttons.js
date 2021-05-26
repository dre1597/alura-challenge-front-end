const btnToggle = document.querySelector('.btn-toggle');
const btnClose = document.querySelector('.btn-close');
const btnSearch = document.querySelector('.btn-search');
const btnCloseSearch = document.querySelector('.close-search');
const searchBar = document.querySelector('.search-bar');
const logo = document.querySelector('.header__logo');
const menu = document.querySelector('.menu');

btnSearch.addEventListener('click', () => {
    searchBar.classList.toggle('search-show');
    btnSearch.classList.add('hide');
    btnCloseSearch.classList.remove('hide');
    logo.classList.add('opacity');
});

btnCloseSearch.addEventListener('click', () => {
    searchBar.classList.toggle('search-show');
    btnSearch.classList.remove('hide');
    btnCloseSearch.classList.add('hide');
    logo.classList.remove('opacity');
});

btnToggle.addEventListener('click', () => {
    menu.classList.add('show-menu');
    btnToggle.classList.add('hide');
    btnClose.classList.remove('hide');
});

btnClose.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    btnToggle.classList.remove('hide');
    btnClose.classList.add('hide');
});
