'use strict';


var imask = window.IMask;

imask(document.getElementById('modal-tel'), {
  mask: '+{7}(000)000-00-00',
});

imask(document.getElementById('form-tel'), {
  mask: '+{7}(000)000-00-00',
});


var modalWindow = document.querySelector('.modal-feedback');
var modalCloseButton = document.querySelector('.modal-feedback__close');
var callbackButton = document.querySelector('.button--callback');
var popupLayer = document.querySelector('.popup-layer');


var showPopup = function () {
  modalWindow.classList.remove('modal-feedback--off');
  popupLayer.classList.remove('popup-layer--off');
  document.body.classList.add('lock');

};

var hidePopup = function () {

  modalWindow.classList.add('modal-feedback--off');
  popupLayer.classList.add('popup-layer--off');
  document.body.classList.remove('lock');

};

var onPopupLayerClick = function () {
  hidePopup();
  popupLayer.removeEventListener('click', onPopupLayerClick);
};

var onEscKeyDown = function (evt) {
  if (evt.keyCode === 27) {
    onPopupLayerClick();
  }
};

var onCallbackButtonClick = function () {
  showPopup();
  document.addEventListener('keydown', onEscKeyDown);
  popupLayer.addEventListener('click', onPopupLayerClick);
};

function onModalCloseButtonClick() {
  hidePopup();
  popupLayer.removeEventListener('click', onPopupLayerClick);
}

if (callbackButton) {
  callbackButton.addEventListener('click', onCallbackButtonClick);
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
}

var focusLock = window.focusLock;


focusLock.on(modalWindow);
focusLock.off(modalCloseButton);


// -------------------accordeon-----------------------------------------

var siteSections = document.querySelector('.page-footer__site-sections');
var contacts = document.querySelector('.page-footer__our-office');

var siteSectionsContainer = siteSections.querySelector('.page-footer__site-section-container');
var contactsContainer = contacts.querySelector('.page-footer__contacts');


var isSiteSectionsUnrolled = false;
var isContactsUnrolled = false;

var onSiteSectionsClick = function () {
  isSiteSectionsUnrolled = !isSiteSectionsUnrolled;

  if (isSiteSectionsUnrolled) {
    siteSectionsContainer.classList.remove('rolled');
  } else {
    siteSectionsContainer.classList.add('rolled');
  }

  if (isContactsUnrolled) {
    contactsContainer.classList.add('rolled');
    isContactsUnrolled = false;
  }
};

var onContactsClick = function () {
  isContactsUnrolled = !isContactsUnrolled;

  if (isContactsUnrolled) {
    contactsContainer.classList.remove('rolled');
  } else {
    contactsContainer.classList.add('rolled');
  }

  if (isSiteSectionsUnrolled) {
    siteSectionsContainer.classList.add('rolled');
    isSiteSectionsUnrolled = false;
  }
};

if (siteSections) {
  siteSections.addEventListener('click', onSiteSectionsClick);
}
if (contacts) {
  contacts.addEventListener('click', onContactsClick);
}

// -----------------------------------------------------------------
