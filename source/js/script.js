// Меню
var navMain = document.querySelector(".main-nav__list-wrapper");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav__list-wrapper--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");

navToggle.addEventListener("click", function() {
  if (navToggle.classList.contains("main-nav__toggle--open")) {
    navToggle.classList.remove("main-nav__toggle--open");
    navToggle.classList.add("main-nav__toggle--closed");
    navMain.style.display = "block";
  } else {
    navToggle.classList.add("main-nav__toggle--open");
    navToggle.classList.remove("main-nav__toggle--closed");
    navMain.style.display = "none";
  }
});

// Модальное окно заказа товар
var link = document.querySelector(".button--js");
var popup = document.querySelector(".modal__order");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  }
});
