"use strict";

const smallNav = document.querySelector(".small__nav");
const smallNavItems = document.querySelectorAll(".small__nav__items");
const smallNavLastItem = document.querySelector(".small__nav__no-line");
const navInputForm = document.querySelector(".nav__input__form");
const navInputDiv = document.querySelector(".nav__input");
const navBtn = document.querySelector(".small__nav__btn");
const navInput = document.querySelector(".small__nav__input");
const inputBtn = document.querySelector(".input__btn");

//클릭 시 input 너비 증가
function addLength() {
  navInputDiv.style.width = "170px";
  navInput.style.width = "120px";
}

// 클릭 시 small nav 왼쪽 이동
function moveLeft() {
  for (let i = 0; i < smallNavItems.length; i++) {
    let smallNavItem = smallNavItems.item(i);
    smallNavItem.classList.add("small__nav__right");
  }
  smallNavLastItem.classList.add("small__nav__right");
}

navBtn.addEventListener("click", addLength);
navBtn.addEventListener("click", moveLeft);
// navBtn.addEventListener("click", moveBtn);

// 길게 클릭 시 버튼으로 복구
let start = 0;
function mouseStart() {
  start = Date.now();
}

let end = 0;
function mouseEnd() {
  end = Date.now();
  if (end - start > 1000) {
    // navInputDiv.style.opacity = 0;
    // navInput.style.opacity = 0;
    // navBtn.style.display = "block";
    // navBtn.style.right = "0%";
    // smallNav.style.right = "-160px";
  }
}

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

navInputForm.addEventListener("submit", inputSubmit);
inputBtn.addEventListener("mousedown", mouseStart);
inputBtn.addEventListener("mouseup", mouseEnd);
