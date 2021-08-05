const noticeBtn = document.querySelector(".Notice__promo__btn");
const slide = document.querySelector(".slide__box");
const play = document.querySelector(".play");
const leftArrow = document.querySelector(".arrow__left");
const rightArrow = document.querySelector(".arrow__right");
const firstImage = document.querySelector(".banner__1");
const secondImage = document.querySelector(".banner__2");
const thirdImage = document.querySelector(".banner__3");
const slideImage = document.querySelector(".banner__img");
const banner = document.querySelectorAll(".banner");
const checkBox = document.querySelectorAll("input[type=checkbox]");

let imageWidth = 819;
let margin = 20;
let currentIndex = 0;
let imageCount = banner.length;

// slide 등장 & 사라짐
function showSlide() {
  slide.classList.toggle("slide__show");
}

// 이미지 위치 초기값
function initialPos() {
  let imagesLength = -(imageWidth + margin) * 4;
  slideImage.style.transform = " translateX(" + imagesLength + "px)";
}

// 슬라이드 이동
function goToSlide(idx) {
  slideImage.classList.add("animated");
  slideImage.style.left = -429.5 - 839.5 * idx + "px";
  currentIndex = idx;
}

// 이미지 앞 뒤로 clone
function makeClone() {
  for (let i = 0; i < imageCount; i++) {
    let cloneSlide = banner.item(i).cloneNode();
    slideImage.appendChild(cloneSlide);
    cloneSlide.classList.add("clone__right");
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

// 슬라이드 무한루프
function loopSlide() {
  if (currentIndex == imageCount) {
    loop();
  } else if (currentIndex == -imageCount) {
    loop();
  }
}

function loop() {
  setTimeout(function () {
    slideImage.classList.remove("slide__animate");
    slideImage.style.left = "-429.5px";
    goToSlide(0);
  }, 500);
  // // 0.1초 후 class 다시 원상복구
  setTimeout(function () {
    slideImage.classList.add("slide__animate");
  }, 600);
}

// slide 아이콘 변경
function changeIcon() {
  if (currentIndex === -3 || currentIndex === 0 || currentIndex === 3) {
    changeFirstIcon();
  } else if (currentIndex === -2 || currentIndex === 1) {
    changeSecondIcon();
  } else if (currentIndex === -1 || currentIndex === 2) {
    changeThirdIcon();
  }
}

function changeFirstIcon() {
  checkBox[0].checked = true;
  checkBox[1].checked = false;
  checkBox[2].checked = false;
}

function changeSecondIcon() {
  checkBox[1].checked = true;
  checkBox[0].checked = false;
  checkBox[2].checked = false;
}

function changeThirdIcon() {
  checkBox[2].checked = true;
  checkBox[0].checked = false;
  checkBox[1].checked = false;
}

// 투명도 조절에 필요한 clone 요소 (위쪽에 적을 수 없음)
const cloneRight = document.querySelector(".clone__right");
const cloneLeft = document.querySelectorAll(".clone__left");
console.log(cloneRight);
// 투명도 조절
function controlOpacity() {
  if (currentIndex === 1) {
    banner[0].classList.add("slide__opacity");
    banner[1].classList.remove("slide__opacity");
    banner[2].classList.add("slide__opacity");
  } else if (currentIndex === 2) {
    banner[1].classList.add("slide__opacity");
    banner[2].classList.remove("slide__opacity");
    banner[0].classList.add("slide__opacity");
    cloneRight.classList.add("slide__opacity");
  } else if (currentIndex === 3) {
    banner[2].classList.add("slide__opacity");
    banner[0].classList.remove("slide__opacity");
    banner[1].classList.add("slide__opacity");
    cloneRight.classList.remove("slide__opacity");
  }
}

noticeBtn.addEventListener("click", showSlide);
rightArrow.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
  loopSlide();
  changeIcon();
  controlOpacity();
  console.log(currentIndex);
});
leftArrow.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
  loopSlide();
  changeIcon();
  controlOpacity();
});
