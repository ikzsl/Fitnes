'use strict';

var imask = window.IMask;

imask(document.getElementById('form-tel'), {
  mask: '+{7}(000)000-00-00',
});


// -------swiper
var Swiper = window.Swiper;
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  centeredSlidesBounds: true,
  // centeredSlides: true,
  // spaceBetween: 30,

  // Optional parameters
  direction: 'horizontal',

  breakpoints: {
    // when window width is >= 320px

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },

  },
  // slidesOffsetBefore: 100,
  // slidesOffsetAfter: 100,

  // loop: true,
  // centeredSlides: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

swiper.init();
