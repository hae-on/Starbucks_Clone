const papuaContent = document.querySelector("#Papua__content");
const papuaImg = document.querySelector("#Papua__coffee__img");
const brazilImg = document.querySelector(".Brazil__coffee__half__bg");
const pickTxt = document.querySelector(".Pick__menu__txt");
const reserveTitle = document.querySelector(".Reserve__title");
const reserveBtn = document.querySelector(".Reserve__btn");
const storeTxt = document.querySelector(".Store__txt");

// PaPua
document.addEventListener("scroll", () => {
  if (window.scrollY > 510) {
    Papua__content.classList.add("Papua__coffee__content");
    papuaImg.classList.add("Papua__coffee__img__ani");
    Papua__content.classList.add("show");
    papuaImg.classList.add("show");
  }
});

// Brazil
document.addEventListener("scroll", () => {
  if (window.scrollY > 1190) {
    brazilImg.classList.add("show");
  }
});

// Pick menu
document.addEventListener("scroll", () => {
  if (window.scrollY > 1480) {
    pickTxt.style.animation = "pick__right 2s";
    pickTxt.classList.add("show");
  }
});

// Reserve
document.addEventListener("scroll", () => {
  if (window.scrollY > 2220) {
    reserveTitle.style.animation = "reserve__right 2s";
    reserveBtn.style.animation = "reserve__btn__right 2s";
  }
});

// Store
document.addEventListener("scroll", () => {
  if (window.scrollY > 2990) {
    storeTxt.style.animation = "store__left 2s;";
  }
});
