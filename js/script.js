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