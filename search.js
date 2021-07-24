"use strict";

const navInputForm = document.querySelector(".nav__input__form");
const navInputDiv = document.querySelector(".nav__input");
const navBtn = document.querySelector(".small__nav__btn");
const navInput = document.querySelector(".small__nav__input");
const inputBtn = document.querySelector(".input__btn");

//클릭 시 input 너비 증가
function addLength() {
  navInputDiv.classList.add("input__div__long");
  navInput.classList.add("input__long");
}

// 클릭 시 버튼 변경
function changeBtn() {
  navBtn.classList.add("input__btn");
  navBtn.classList.remove("small__nav__btn");
  setTimeout(function () {
    navBtn.setAttribute("type", "submit");
  }, 300);
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

navBtn.addEventListener("click", changeBtn);
navBtn.addEventListener("click", addLength);
navInputForm.addEventListener("submit", inputSubmit);
