// const a = document.querySelector(".slide__box");
// const images = document.querySelectorAll(".banner__img img");

// let slideIndex = 0;

// function changeImg() {
//   for (let i = 0; i < images.length; i++) {
//     // console.log(images[i]);
//     images.item(i).style.display = "none";
//     // 0은 절반 1은 전부 2는 절반
//     // 1은 절반 2는 전부 0은 절반
//     // 2는 절반 0은 전부 1은 절반
//   }
//   slideIndex++;
//   if (slideIndex > images.length) {
//     images[slideIndex - 1].style.display = "block";

//   }
// }
// setTimeout(changeImg, 2000);
// a.addEventListener("click", changeImg);

const noticeBtn = document.querySelector(".Notice__promo__btn");
const slide = document.querySelector(".slide__box");
const play = document.querySelector(".play");

// slide 등장 & 사라짐
function showSlide() {
  slide.classList.toggle("slide__show");
}

// play -> stop
function changePlay() {
  play.src = "image/Slide/main_prom_stop.png";
}

noticeBtn.addEventListener("click", showSlide);
play.addEventListener("click", changePlay);
