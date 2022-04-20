"use strict";

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

$(document).ready(function () {
  $('.header__box').slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
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
    responsive: [
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
  });
});