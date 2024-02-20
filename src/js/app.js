import * as flsFunctions from './modules/functions.js';
import { Splide } from '@splidejs/splide';
import fslightbox from 'fslightbox';
import IMask from 'imask';

flsFunctions.isWebp();

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', flsFunctions.toggleMobileMenu);

const fileField = document.querySelector('.form__file');
const fileWrapper = fileField.nextElementSibling;
const fileVal = fileWrapper.querySelector('.form__file-fake');
const initialText = fileVal.innerText;
fileField.addEventListener('change', (e) => {
  let countFiles = '';
  if (fileField.files && fileField.files.length >= 1) {
    countFiles = fileField.files.length;
  }

  if (countFiles) {
    fileVal.innerText = fileField.files[0].name;
    fileVal.style.color = 'var(--color-white)';
  } else {
    fileVal.innerText = initialText;
    fileVal.style.color = 'var(--color-grey-30)';
  }
});

if (document.querySelector('.gallery') != null) {
  new Splide('.gallery', {
    arrows: true,
    pagination: true,
    perPage: 3,
    perMove: 1,
    gap: '20px',
    updateOnMove: true,
    focus: 0,
    omitEnd: true,
    breakpoints: {
      960: {
        perPage: 2,
      },
      699: {
        perPage: 1,
      },
      550: {},
    },
  }).mount();
}

flsFunctions.bindModal('.open-modal', '.modal--form', '.modal__close');

const openModalHousePlanBtns = document.querySelectorAll('.open-modal-house-plan');
if (openModalHousePlanBtns != null) {
  openModalHousePlanBtns.forEach((btn, i) => {
    flsFunctions.bindModal(`.open-modal-house-plan-${i + 1}`, `.modal--house-plan-${i + 1}`, '.modal__close');
  });
}

const openModalVillagePlanBtns = document.querySelectorAll('.open-modal-village-plan');
if (openModalVillagePlanBtns != null) {
  openModalVillagePlanBtns.forEach((btn, i) => {
    flsFunctions.bindModal(`.open-modal-village-plan-${i + 1}`, `.modal--village-plan-${i + 1}`, '.modal__close');
  });
}

flsFunctions.bindModal('.open-modal-uk', '.modal--uk', '.modal__close');

// get current year
document.querySelector('.current-year').innerHTML = new Date().getFullYear();

// scroll to top
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollBtn.style.visibility = 'visible';
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.visibility = 'hidden';
    scrollBtn.style.opacity = '0';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(initYandexMap, 4000);
});

function initYandexMap() {
  if (window.yandexMapDidInit) {
    return false;
  }
  window.yandexMapDidInit = true;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;

  script.src =
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3618fe9679dd4560161c5eac60f1face29ed3fd29b411430cb665c7fc70d95c8&amp;width=700&amp;height=400&amp;lang=ru_RU&amp;scroll=true';

  document.querySelector('.footer__map').appendChild(script);
}

// phone mask
const elements = document.querySelectorAll('.form__input--tel');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
if (elements != null) {
  elements.forEach((element) => {
    const mask = IMask(element, maskOptions);
  });
}
