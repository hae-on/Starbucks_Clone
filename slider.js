const noticeBtn = document.querySelector(".Notice__promo__btn");
const slide = document.querySelector(".slide__box");
const play = document.querySelector(".play");
// const off = document.querySelectorAll(".off__btns");
const offFirst = document.querySelector(".off__1");
const offSecond = document.querySelector(".off__2");
const offThird = document.querySelector(".off__3");

// slide 등장 & 사라짐
function showSlide() {
  slide.classList.toggle("slide__show");
}

// play -> stop
let cnt = 0;
function changePlay() {
  cnt++;
  if (cnt % 2 == 1) {
    play.src = "image/Slide/main_prom_stop.png";
  } else {
    play.src = "image/Slide/main_prom_play.png";
  }
}

// off -> on
let offFirstCount = 0;
let offSecondCount = 0;
let offThirdCount = 0;
function changeFirstOff() {
  offFirstCount++;
  if (offFirstCount % 2 == 1) {
    offFirst.src = "image/Slide/main_prom_on.png";
  } else {
    offFirst.src = "image/Slide/main_prom_off.png";
  }
}

function changeSecondOff() {
  offSecondCount++;
  if (offSecondCount % 2 == 1) {
    offSecond.src = "image/Slide/main_prom_on.png";
  } else {
    offSecond.src = "image/Slide/main_prom_off.png";
  }
}

function changeThirdOff() {
  offThirdCount++;
  if (offThirdCount % 2 == 1) {
    offThird.src = "image/Slide/main_prom_on.png";
  } else {
    offThird.src = "image/Slide/main_prom_off.png";
  }
}

noticeBtn.addEventListener("click", showSlide);
play.addEventListener("click", changePlay);
offFirst.addEventListener("click", changeFirstOff);
offSecond.addEventListener("click", changeSecondOff);
offThird.addEventListener("click", changeThirdOff);
