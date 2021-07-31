const noticeBtn = document.querySelector(".Notice__promo__btn");
const slide = document.querySelector(".slide__box");
const play = document.querySelector(".play");
const offFirst = document.querySelector(".off__1");
const offSecond = document.querySelector(".off__2");
const offThird = document.querySelector(".off__3");
const leftArrow = document.querySelector(".arrow__left");
const rightArrow = document.querySelector(".arrow__right");
const firstImage = document.querySelector(".banner__1");
const secondImage = document.querySelector(".banner__2");
const thirdImage = document.querySelector(".banner__3");
const slideImage = document.querySelector(".banner__img");
const banner = document.querySelectorAll(".banner");

let imageWidth = 819;
let margin = 20;

// slide 등장 & 사라짐
function showSlide() {
  slide.classList.toggle("slide__show");
}

// 이미지 앞 뒤로 clone
function makeClone() {
  for (let i = 0; i < banner.length; i++) {
    let cloneSlide = banner.item(i).cloneNode();
    slideImage.appendChild(cloneSlide);
  }

  for (let i = 2; i >= 0; i--) {
    let cloneSlide = banner.item(i).cloneNode();
    slideImage.prepend(cloneSlide);
    cloneSlide.classList.add("clone__left");
  }

  let cloneFirstBanner = document.querySelector(".clone__left");
  cloneFirstBanner.before(banner.item(2).cloneNode());
}

makeClone();
initialPos();
setTimeout(function () {
  slideImage.classList.add("slide__animate");
}, 100);

// 이미지 위치 초기값
function initialPos() {
  let imagesLength = -(imageWidth + margin) * 4;
  slideImage.style.transform = " translateX(" + imagesLength + "px)";
}

let moveCnt = 0;
let imageCount = banner.length;

// arrow 버튼 효과
function moveLeft() {
  slideImage.style.left = slideImage.offsetLeft + 839.5 + "px";
  moveCnt--;
  if (moveCnt == -imageCount) {
    setTimeout(function () {
      slideImage.classList.remove("slide__animate");
      slideImage.style.left = "-429.5px";
      moveCnt = 0;
    }, 500);
    // 0.1초 후 class 다시 원상복구
    setTimeout(function () {
      slideImage.classList.add("slide__animate");
    }, 600);
  }
}

function moveRight() {
  slideImage.style.left = slideImage.offsetLeft - 839.5 + "px";
  moveCnt++;

  if (moveCnt == imageCount) {
    setTimeout(function () {
      slideImage.classList.remove("slide__animate");
      slideImage.style.left = "-429.5px";
      moveCnt = 0;
    }, 500);
    // 0.1초 후 class 다시 원상복구
    setTimeout(function () {
      slideImage.classList.add("slide__animate");
    }, 600);
  }
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
leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);
noticeBtn.addEventListener("click", () => {
  setInterval(moveRight, 3000);
});
