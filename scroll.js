const papuaContent = document.querySelector("#Papua__content");
const papuaImg = document.querySelector("#Papua__coffee__img");
const brazilImg = document.querySelector(".Brazil__coffee__half__bg");

// PaPua
document.addEventListener("scroll", () => {
  if (window.scrollY > 536) {
    Papua__content.classList.add("Papua__coffee__content");
    papuaImg.classList.add("Papua__coffee__img__ani");
  }
});

// brazil
document.addEventListener("scroll", () => {
  if (window.scrollY > 1190) {
    brazilImg.style.opacity = 1;
  }
});

console.log(papuaImg);
