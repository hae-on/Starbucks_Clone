const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".mobile__menu");
const close = document.querySelector(".fa-times");

const arrowMobileBtn = document.querySelectorAll(".fa-chevron-down");
// arrow button
const starbucksBtn = arrowMobileBtn.item(0);
const coffeeBtn = arrowMobileBtn.item(1);
const storeBtn = arrowMobileBtn.item(2);
const responsibilityBtn = arrowMobileBtn.item(3);
const rewardsBtn = arrowMobileBtn.item(4);
const newBtn = arrowMobileBtn.item(5);
// list
const starbucksList = document.querySelectorAll(".My__Starbucks__m__list");
const coffeeList = document.querySelectorAll(".COFFEE__m__list");
const storeList = document.querySelectorAll(".STORE__m__list");
const responsibilityList = document.querySelectorAll(
  ".RESPONSIBILITY__m__list"
);
const rewardsList = document.querySelectorAll(".Starbucks__Rewards__m__list");
const newList = document.querySelectorAll(".WHATS__NEW__m__list");

menuIcon.addEventListener("click", () => {
  menu.classList.add("menu__show");
  menu.classList.remove("menu__hide");
});

close.addEventListener("click", () => {
  menu.classList.add("menu__hide");
  menu.classList.remove("menu__show");
});

// list
starbucksBtn.addEventListener("click", () => {
  for (let i = 0; i < starbucksList.length; i++) {
    starbucksList.item(i).classList.toggle("disappear");
  }
});

coffeeBtn.addEventListener("click", () => {
  for (let i = 0; i < coffeeList.length; i++) {
    coffeeList.item(i).classList.toggle("disappear");
  }
});

storeBtn.addEventListener("click", () => {
  for (let i = 0; i < storeList.length; i++) {
    storeList.item(i).classList.toggle("disappear");
  }
});

responsibilityBtn.addEventListener("click", () => {
  for (let i = 0; i < responsibilityList.length; i++) {
    responsibilityList.item(i).classList.toggle("disappear");
  }
});

rewardsBtn.addEventListener("click", () => {
  for (let i = 0; i < rewardsList.length; i++) {
    rewardsList.item(i).classList.toggle("disappear");
  }
});

newBtn.addEventListener("click", () => {
  for (let i = 0; i < newList.length; i++) {
    newList.item(i).classList.toggle("disappear");
  }
});
