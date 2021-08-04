// const noticeBtn = document.querySelector(".Notice__promo__btn");
// const slide = document.querySelector(".slide__box");
// const play = document.querySelector(".play");
// const leftArrow = document.querySelector(".arrow__left");
// const rightArrow = document.querySelector(".arrow__right");
// const firstImage = document.querySelector(".banner__1");
// const secondImage = document.querySelector(".banner__2");
// const thirdImage = document.querySelector(".banner__3");
// const slideImage = document.querySelector(".banner__img");
// const banner = document.querySelectorAll(".banner");
// const checkBox = document.querySelectorAll("input[type=checkbox]");

// let imageWidth = 819;
// let margin = 20;


// // 슬라이드 시작 시 첫번째 checkbox checked
// // changeFirstIcon();

// let moveCnt = 0;
// let imageCount = banner.length;


// // arrow 버튼 효과
// function moveLeft() {
//   slideImage.style.left = slideImage.offsetLeft + 839.5 + "px";
//   moveLeftCnt--;
//   stopSlide();
//   startSlide();
//   
//   // 이미지 변경 시 원 아이콘 변경
//   if (moveLeftCnt === -3) {
//     changeFirstIcon();
//   } else if (moveLeftCnt === -2) {
//     changeSecondIcon();
//   } else if (moveLeftCnt === -1) {
//     changeThirdIcon();
//     // } else if (moveLeftCnt === 0) {
//     //   changeFirstIcon();
//   }

//   // 이동에 따른 투명도 변경
//   if (moveLeftCnt == 1) {
//     banner[1].classList.remove("slide__opacity");
//     banner[2].classList.add("slide__opacity");
//   }
//   if (moveLeftCnt == 0) {
//     banner[0].classList.remove("slide__opacity");
//     banner[1].classList.add("slide__opacity");
//   }

//   if (moveLeftCnt == -1) {
//     banner[1].classList.add("slide__opacity");
//     cloneLeft[2].classList.remove("slide__opacity");
//     banner[0].classList.add("slide__opacity");
//     cloneLeft[1].classList.add("slide__opacity");
//   }

//   if (moveLeftCnt == -2) {
//     cloneLeft[0].classList.add("slide__opacity");
//     cloneLeft[1].classList.remove("slide__opacity");
//     cloneLeft[2].classList.add("slide__opacity");
//   }

//   if (moveLeftCnt == -3) {
//     banner[2].classList.add("slide__opacity");
//     banner[0].classList.remove("slide__opacity");
//     cloneLeft[0].classList.remove("slide__opacity");
//     cloneLeft[1].classList.add("slide__opacity");
//   }

//   console.log("왼쪽 " + moveLeftCnt);
// }

// function moveRight() {
//   slideImage.style.left = slideImage.offsetLeft - 839.5 + "px";
//   moveCnt++;
//   stopSlide();
//   startSlide();
//   if (moveCnt == imageCount) {
//     setTimeout(function () {
//       slideImage.classList.remove("slide__animate");
//       slideImage.style.left = "-429.5px";
//       moveCnt = 0;
//     }, 500);
//     // 0.1초 후 class 다시 원상복구
//     setTimeout(function () {
//       slideImage.classList.add("slide__animate");
//     }, 600);
//   }
//   // 이동에 따른 아이콘 변경

//   if (moveCnt === 3) {
//     changeFirstIcon();
//   } else if (moveCnt === 1) {
//     changeSecondIcon();
//   } else if (moveCnt === 2) {
//     changeThirdIcon();
//   }

//   // 이동에 따른 투명도 변경
//   if (moveCnt == -1) {
//     cloneLeft[2].classList.remove("slide__opacity");
//     cloneLeft[1].classList.add("slide__opacity");
//   }

//   if (moveCnt == 0) {
//     banner[0].classList.remove("slide__opacity");
//     cloneLeft[2].classList.add("slide__opacity");
//   }

//   if (moveCnt == 1) {
//     banner[0].classList.add("slide__opacity");
//     banner[1].classList.remove("slide__opacity");
//     banner[2].classList.add("slide__opacity");
//   }

//   if (moveCnt == 2) {
//     banner[1].classList.add("slide__opacity");
//     banner[2].classList.remove("slide__opacity");
//     banner[0].classList.add("slide__opacity");
//     cloneRight[0].classList.add("slide__opacity");
//   }

//   if (moveCnt == 3) {
//     banner[2].classList.add("slide__opacity");
//     banner[0].classList.remove("slide__opacity");
//     banner[1].classList.add("slide__opacity");
//     cloneRight[0].classList.remove("slide__opacity");
//   }

//   console.log("오른쪽" + moveCnt);
// }

// // 아이콘 변경
// function changeFirstIcon() {
//   checkBox[0].checked = true;
//   checkBox[1].checked = false;
//   checkBox[2].checked = false;
// }

// function changeSecondIcon() {
//   checkBox[1].checked = true;
//   checkBox[0].checked = false;
//   checkBox[2].checked = false;
// }

// function changeThirdIcon() {
//   checkBox[2].checked = true;
//   checkBox[0].checked = false;
//   checkBox[1].checked = false;
// }

// function startSlide() {
//   moveslide = setInterval(moveRight, 3000);
// }

// function stopSlide() {
//   clearInterval(moveslide);
// }

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

// // 0번이 체크 되어 있고 1번을 눌렀을 때, 2번을 눌렀을 때
// if ((checkBox[0].checked = true)) {
//   checkBox[1].addEventListener("click", () => {
//     stopSlide();
//     slideImage.style.left = slideImage.offsetLeft - 839.5 + "px";
//     moveRight();
//   });
//   // checkBox[2].addEventListener("click", () => {
//   //   stopSlide();
//   //   slideImage.style.left = slideImage.offsetLeft - 839.5 * 2 + "px";
//   //   moveCnt = 2;
//   //   setTimeout(function () {
//   //     moveRight();
//   //   }, 2000);
//   // });
// }

// // 1번이 체크 되어 있고 0번을 눌렀을 때, 2번을 눌렀을 때
// if ((checkBox[1].checked = true)) {
//   // checkBox[0].addEventListener("click", () => {
//   //   stopSlide();
//   //   slideImage.style.left = slideImage.offsetLeft + 839.5 + "px";
//   //   moveCnt = 3;
//   //   // moveLeft();
//   //   setTimeout(function () {
//   //     moveRight();
//   //   }, 2000);
//   // });
//   checkBox[2].addEventListener("click", () => {
//     stopSlide();
//     slideImage.style.left = slideImage.offsetLeft - 839.5 + "px";
//     // moveRight();
//     // moveLeft();
//   });
// }

// // 2번이 체크 되어 있고, 0번을 눌렀을 떄, 1번을 눌렀을 때
// if ((checkBox[2].checked = true)) {
//   // checkBox[0].addEventListener("click", () => {});
//   checkBox[1].addEventListener("click", () => {
//     stopSlide();
//     slideImage.style.left = slideImage.offsetLeft + 839.5 + "px";
//   });
// }

// // checkBox[0].addEventListener("click", () => {
// //   console.log(checkBox[0].checked);
// //   slideImage.style.left = slideImage.offsetLeft + 839.5 + "px";
// // });

// initialPos();
// makeClone();

// // 투명도 조절에 필요한 clone 요소 (위쪽에 적을 수 없음)
// cloneRight = document.querySelectorAll(".clone__right");
// cloneLeft = document.querySelectorAll(".clone__left");

// noticeBtn.addEventListener("click", showSlide);
// play.addEventListener("click", changePlay);
// leftArrow.addEventListener("click", moveLeft);
// rightArrow.addEventListener("click", moveRight);
// noticeBtn.addEventListener("click", startSlide);
