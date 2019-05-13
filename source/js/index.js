  // Меню

var navMain = document.querySelector('.main-nav__list-wrapper');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__list-wrapper--nojs');
navToggle.classList.remove("main-nav__toggle--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__toggle--open')) {
    navMain.classList.remove('main-nav__toggle--open');
    navMain.classList.add('main-nav__toggle--closed');
    navMain.style.display = "block";
  } else {
    navMain.classList.add('main-nav__toggle--open');
    navMain.classList.remove('main-nav__toggle--closed');
    navMain.style.display = "none";
  }
});
