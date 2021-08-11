const arrowBtn = document.querySelectorAll(".footer__arrow");
// list 목록
const serviceList = document.querySelectorAll(".service__m__list");
const companyList = document.querySelectorAll(".company__m__list");
const corporateList = document.querySelector(".corporate__m__list");
const partnershipList = document.querySelectorAll(".partnership__m__list");
const onlineList = document.querySelectorAll(".community__m__list");
const recruitList = document.querySelectorAll(".recruit__m__list");
// arrow 버튼
const serviceBtn = arrowBtn.item(0);
const companyBtn = arrowBtn.item(1);
const corporateBtn = arrowBtn.item(2);
const partnershipBtn = arrowBtn.item(3);
const onlineBtn = arrowBtn.item(4);
const recruitBtn = arrowBtn.item(5);

serviceBtn.addEventListener("click", () => {
  for (let i = 0; i < serviceList.length; i++) {
    serviceList.item(i).classList.toggle("disappear");
  }
});

companyBtn.addEventListener("click", () => {
  for (let i = 0; i < companyList.length; i++) {
    companyList.item(i).classList.toggle("disappear");
  }
});

corporateBtn.addEventListener("click", () => {
  corporateList.classList.toggle("disappear");
});

partnershipBtn.addEventListener("click", () => {
  for (let i = 0; i < partnershipList.length; i++) {
    partnershipList.item(i).classList.toggle("disappear");
  }
});

onlineBtn.addEventListener("click", () => {
  for (let i = 0; i < onlineList.length; i++) {
    onlineList.item(i).classList.toggle("disappear");
  }
});

recruitBtn.addEventListener("click", () => {
  for (let i = 0; i < recruitList.length; i++) {
    recruitList.item(i).classList.toggle("disappear");
  }
});
