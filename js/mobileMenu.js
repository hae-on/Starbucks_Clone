const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".mobile__menu");
const close = document.querySelector(".fa-times");
const dim = document.querySelector(".mobile__menu__dim");

// 검색창
const searchInput = document.querySelector(".menu__input");
const searchBtn = document.querySelector(".menu__btn");
const searchForm = document.querySelector(".menu__form");

// arrow button
const arrowMobileBtn = document.querySelectorAll(".fa-chevron-down");

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
  dim.classList.add("menu__show");
});

close.addEventListener("click", () => {
  menu.classList.add("menu__hide");
  menu.classList.remove("menu__show");
  dim.classList.remove("menu__show");
});

// search
// input값 전송하고 알람창
function inputSubmit(event) {
  event.preventDefault();
  const search = searchInput.value;
  if (search !== "") {
    alert(`${search} 은(는) 검색할 수 없습니다. 다른 검색어를 입력해주세요.`);
  } else {
    alert("검색어를 입력하세요.");
  }
}

searchForm.addEventListener("submit", inputSubmit);

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
