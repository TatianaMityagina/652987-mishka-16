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

// Карта Яндекс
ymaps.ready(init);
  function init () {
    var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 18
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: "Большая Конюшенная, д. 19/8, офис 101"
    }, {
      iconLayout: "default#image",
      iconImageHref: "./img/icon-map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -101]
    });

    myMap.geoObjects
    .add(myPlacemark)
  }
