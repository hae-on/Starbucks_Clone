// let imageWidth = 819;
// let margin = 20;

// // 슬라이드 시작 시 첫번째 checkbox checked
// // changeFirstIcon();

// let moveCnt = 0;
// let imageCount = banner.length;

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
