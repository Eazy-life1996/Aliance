"use strict";

// Раскрытие меню

let menuBtn = document.querySelector(".header__btn-burger");
let menuLogo = document.querySelector(".header__logo");
let menu = document.querySelector(".header__nav");
let btnSvgOpen = document.querySelector(".open");
let btnSvgClose = document.querySelector(".close");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  btnSvgOpen.classList.toggle("active-open");
  btnSvgClose.classList.toggle("active-close");
  menuBtn.classList.toggle("active-btn");
  menuLogo.classList.toggle("active-logo");
});

// Модальное окно

const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('[data-btn-modal]');
const btnCloseModal = document.querySelector('[data-modal-close]');

function open() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  clearInterval(timerForModal);
}

function close() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

btnOpenModal.addEventListener('click', () => {
  open();
});

function closeModal() {
  btnCloseModal.addEventListener('click', close);

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      close();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.keyCode === 27 && modal.style.display === 'block') {
      close();
    }
  });
}

closeModal();
const timerForModal = setTimeout(open, 3000);

// Настройка слайдеров

$(document).ready(function () {
  $('.header__box, .preview__box').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [{
          breakpoint: 768,
          settings: "unslick"
    }]
  });
});

$(document).ready(function () {
  $('.work__list').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    responsive: [{
          breakpoint: 768,
          settings: "unslick"
    }]
  });
});
$(document).ready(function () {
  $('.blog__slider').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
});
$(document).ready(function () {
  $('.centre__slider').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: false,
    centerMode: true,
    initialSlide: 1,
    slidesToShow: 1,
    centerPadding: '10px',
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '12.2%',
        initialSlide: 2
      }
    }]
  });
});