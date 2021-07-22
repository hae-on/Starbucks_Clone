const papuaContent = document.querySelector("#Papua__content");
const papuaImg = document.querySelector("#Papua__coffee__img");
const brazilImg = document.querySelector(".Brazil__coffee__half__bg");
const pickTxt = document.querySelector(".Pick__menu__txt");

// PaPua
document.addEventListener("scroll", () => {
  if (window.scrollY > 536) {
    Papua__content.classList.add("Papua__coffee__content");
    papuaImg.classList.add("Papua__coffee__img__ani");
  }
});

// Brazil
document.addEventListener("scroll", () => {
  if (window.scrollY > 1190) {
    brazilImg.style.opacity = 1;
  }
});

// Pick menu
document.addEventListener("scroll", () => {
  if (window.scrollY > 1517) {
    pickTxt.style.animation = "pick__right 2s";
    pickTxt.style.opacity = 1;
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 2345) {
  }
});

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
});
