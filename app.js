"use strict";

const navInputDiv = document.querySelector(".nav__input");
const navBtn = document.querySelector(".small__nav__btn");
const navInput = document.querySelector(".small__nav__input");

// function showInputDiv() {
//   navInputDiv.style.width = "170px";
//   navInputDiv.style.opacity = 1;
// }

// function showInput() {
//   navInput.style.opacity = 1;
//   navBtn.style.right = "5%";
// }

function changeNav() {
  navInputDiv.style.width = "170px";
  navInputDiv.style.opacity = 1;
  navInput.style.opacity = 1;
  navBtn.style.right = "5%";
  navBtn.style.border = "none";
}

// navBtn.addEventListener("click", showInputDiv);
// navBtn.addEventListener("click", showInput);
navBtn.addEventListener("click", changeNav);
