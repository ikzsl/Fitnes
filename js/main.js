'use strict';

// -------objectFitImages
window.objectFitImages();


// --------imask
var imask = window.IMask;

imask(document.getElementById('form-tel'), {
  mask: '+{7}(000)000-00-00',
});


// -------swiper
var Swiper = window.Swiper;
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  slidesOffsetBefore: -40,
  slidesOffsetAfter: 40,

  // centeredSlides: true,
  // spaceBetween: 30,

  // Optional parameters
  direction: 'horizontal',

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      slidesOffsetBefore: -30,
      slidesOffsetAfter: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      slidesOffsetBefore: -30,
      slidesOffsetAfter: 30,
    },
  },


  // Navigation arrows
  navigation: {
    nextEl: '.button-next1',
    prevEl: '.button-prev1',
  },

});

swiper.init();

var swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // width: 640,

  centeredSlides: true,

  // spaceBetween: 80,

  // Optional parameters
  direction: 'horizontal',
  updateOnWindowResize: true,
  slidesOffsetBefore: 20,
  // slidesOffsetAfter: 40,

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesOffsetBefore: 40,
    },
    // when window width is >= 1200px
    1200: {
      slidesOffsetBefore: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next2',
    prevEl: '.button-prev2',
  },

});

swiper2.init();
swiper2.width = 200;

// -----toggler
var subscriptions = document.querySelector('.subscriptions');
var togglers = subscriptions.querySelectorAll('.subscriptions__toggler-item');
var subscriptionsLists = subscriptions.querySelectorAll('.subscriptions__list');

var activeScreen = 0;

var addActiveClass = function () {
  for (var i = 0; i < togglers.length; i += 1) {
    if (i === activeScreen) {
      subscriptionsLists[i].classList.add('subscriptions__list--active');
      togglers[i].classList.add('subscriptions__toggler-item--active');
    }
  }
};

var removeActiveClass = function () {
  for (var i = 0; i < togglers.length; i += 1) {
    if (i === activeScreen) {
      subscriptionsLists[i].classList.remove('subscriptions__list--active');
      togglers[i].classList.remove('subscriptions__toggler-item--active');
    }
  }
};

var onTogglerClick = function (e) {
  for (var i = 0; i < togglers.length; i += 1) {
    if (togglers[i] === e.target) {
      removeActiveClass();
      activeScreen = i;
      addActiveClass();
    }
  }
};

var addEventListeners = function () {
  for (var i = 0; i < togglers.length; i += 1) {
    togglers[i].addEventListener('click', onTogglerClick);
  }
};

addActiveClass();
addEventListeners();
