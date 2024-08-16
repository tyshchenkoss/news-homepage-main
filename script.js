"use strict";

const menuToggleEl = document.querySelector(".menu-toggle");
const closeToggleEl = document.querySelector(".close-tag");
const header = document.querySelector("header");
const overlayEl = document.querySelector(".overlay");

menuToggleEl.addEventListener("click", hidden);

closeToggleEl.addEventListener("click", hidden);

overlayEl.addEventListener("click", hidden);

function hidden() {
  header.classList.toggle("show-menu-bar");
  overlayEl.classList.toggle("hidden");
  menuToggleEl.classList.toggle("hidden");
}
