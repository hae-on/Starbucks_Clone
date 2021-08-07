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

// 슬라이드 이동
function goToSlide(idx) {
  slideImage.classList.add("animated");
  slideImage.style.left = -1269 - 839.5 * idx + "px";
  currentIndex = idx;
}

// // 이미지 위치 초기값
// function initialPos() {
//   let imagesLength = -(imageWidth + margin) * 4;
//   slideImage.style.transform = " translateX(" + imagesLength + "px)";
// }

// initialPos();

setTimeout(function () {
  slideImage.classList.add("slide__animate");
}, 100);

function leftLoop() {
  setTimeout(function () {
    slideImage.classList.remove("slide__animate");
    slideImage.style.left = "-429.5px";
    goToSlide(2);
  }, 500);
  // // 0.1초 후 class 다시 원상복구
  setTimeout(function () {
    slideImage.classList.add("slide__animate");
  }, 600);
}

function rightLoop() {
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

function loopSlide() {
  if (currentIndex == 3) {
    rightLoop();
  } else if (currentIndex == -1) {
    leftLoop();
  }
}

loopSlide();

// slide 아이콘 변경
function changeIcon() {
  if (currentIndex === 0 || currentIndex === 3) {
    changeFirstIcon();
  } else if (currentIndex === 1) {
    changeSecondIcon();
  } else if (currentIndex === -1 || currentIndex === 2) {
    changeThirdIcon();
  }
}

// // play -> stop
// let clickCnt = 0;
// function changePlay() {
//   clickCnt++;
//   if (clickCnt % 2 == 1) {
//     play.src = "image/Slide/main_prom_play.png";
//     stopSlide();
//   } else if (clickCnt % 2 == 0) {
//     play.src = "image/Slide/main_prom_stop.png";
//     setTimeout(moveRight, 500);
//     startSlide();
//   }
// }

// slide circle icon
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

// 투명도 조절
function controlOpacity() {
  if (currentIndex === 1) {
    banner[1].classList.add("slide__opacity");
    banner[2].classList.remove("slide__opacity");
    banner[3].classList.add("slide__opacity");
  } else if (currentIndex === 2) {
    banner[2].classList.add("slide__opacity");
    banner[3].classList.remove("slide__opacity");
    banner[4].classList.add("slide__opacity");
  } else if (currentIndex === 3 || currentIndex === 0) {
    banner[1].classList.remove("slide__opacity");
    banner[4].classList.remove("slide__opacity");
    banner[0].classList.add("slide__opacity");
    banner[2].classList.add("slide__opacity");
    banner[3].classList.add("slide__opacity");
  } else if (currentIndex === -1) {
    banner[1].classList.add("slide__opacity");
    banner[0].classList.remove("slide__opacity");
    banner[3].classList.remove("slide__opacity");
    banner[4].classList.add("slide__opacity");
  }
}

// 버튼 클릭 시 이미지 이동
function moveFirstImage() {
  goToSlide(0);
  controlOpacity();
  changeFirstIcon();
}
function moveSecondImage() {
  goToSlide(1);
  controlOpacity();
  changeSecondIcon();
}
function moveThirdImage() {
  goToSlide(2);
  controlOpacity();
  changeThirdIcon();
}

function moveIcon() {
  if ((checkBox[0].checked = true)) {
    checkBox[1].addEventListener("click", () => {
      moveSecondImage();
    });
    checkBox[2].addEventListener("click", () => {
      moveThirdImage();
    });
  }
  if ((checkBox[1].checked = true)) {
    checkBox[0].addEventListener("click", () => {
      moveFirstImage();
    });
    checkBox[2].addEventListener("click", () => {
      moveThirdImage();
    });
  }

  if ((checkBox[2].checked = true)) {
    checkBox[0].addEventListener("click", () => {
      moveFirstImage();
    });

    checkBox[1].addEventListener("click", () => {
      moveSecondImage();
    });
  }
}

moveIcon();
changeFirstIcon();

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
  console.log(currentIndex);
});
