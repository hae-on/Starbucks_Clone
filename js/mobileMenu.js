const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".mobile__menu");
const close = document.querySelector(".fa-times");

// menuIcon.addEventListener("click", () => {
//   menu.classList.toggle("disappear");
// });

menuIcon.addEventListener("click", () => {
  menu.classList.add("menu__show");
  menu.classList.remove("menu__hide");
});

close.addEventListener("click", () => {
  menu.classList.add("menu__hide");
  menu.classList.remove("menu__show");
});

console.log(menuIcon);
console.log(menu);
