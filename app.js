"use strict";

const smallNav = document.querySelector(".small__nav");
const navInputForm = document.querySelector(".nav__input__form");
const navInputDiv = document.querySelector(".nav__input");
const navBtn = document.querySelector(".small__nav__btn");
const navInput = document.querySelector(".small__nav__input");
const inputBtn = document.querySelector(".input__btn");

// NAV 검색버튼 -> input 변환
function changeNav() {
  navInputDiv.style.width = "170px";
  navInputDiv.style.opacity = 1;
  navInput.style.opacity = 1;
  navBtn.style.display = "none";
  navBtn.style.right = "-100%";
  smallNav.style.right = "-35px";
}

// 길게 클릭 시 버튼으로 복구
let start = 0;
function mouseStart() {
  start = Date.now();
}

let end = 0;
function mouseEnd() {
  end = Date.now();
  if (end - start > 1000) {
    navInputDiv.style.opacity = 0;
    navInput.style.opacity = 0;
    navBtn.style.display = "block";
    navBtn.style.right = "0%";
    smallNav.style.right = "-160px";
  }
}

// // 애니메이션
// let num = 0;
// function ani() {
//   setInterval("console.log(num--);", 100);
//   let timer = setInterval(function () {
//     smallNav.style.left = "6px";
//   }, 20);
//   console.log(timer);
//   setInterval(function () {
//     num++;
//   }, 300);
// }

// input값 전송하고 알람창
function inputSubmit(event) {
  event.preventDefault();
  const search = navInput.value;
  if (search !== "") {
    alert(`${search} 은(는) 검색할 수 없습니다. 다른 검색어를 입력해주세요.`);
  } else {
    alert("검색어를 입력하세요.");
  }
}

navBtn.addEventListener("click", changeNav);
navInputForm.addEventListener("submit", inputSubmit);
inputBtn.addEventListener("mousedown", mouseStart);
inputBtn.addEventListener("mouseup", mouseEnd);
