const arrowBtn = document.querySelectorAll(".fa-chevron-down");
// list 목록
const serviceList = document.querySelectorAll(".service__m__list");
const companyList = document.querySelectorAll(".company__m__list");
const corporateList = document.querySelector(".corporate__m__list");
const partnershipList = document.querySelectorAll(".partnership__m__list");
const onlineList = document.querySelectorAll(".community__m__list");
const recruitList = document.querySelectorAll(".recruit__m__list");
// arrow 버튼
const serviceBtn = arrowBtn.item(1);
const companyBtn = arrowBtn.item(2);
const corporateBtn = arrowBtn.item(3);
const partnershipBtn = arrowBtn.item(4);
const onlineBtn = arrowBtn.item(5);
const recruitBtn = arrowBtn.item(6);

serviceBtn.addEventListener("click", () => {
  for (let i = 0; i < serviceList.length; i++) {
    serviceList.item(i).classList.remove("disappear");
  }
});

companyBtn.addEventListener("click", () => {
  for (let i = 0; i < companyList.length; i++) {
    companyList.item(i).classList.remove("disappear");
  }
});

corporateBtn.addEventListener("click", () => {
  corporateList.classList.remove("disappear");
});

partnershipBtn.addEventListener("click", () => {
  for (let i = 0; i < partnershipList.length; i++) {
    partnershipList.item(i).classList.remove("disappear");
  }
});

serviceBtn.addEventListener("click", () => {
  for (let i = 0; i < serviceList.length; i++) {
    serviceList.item(i).classList.remove("disappear");
  }
});

onlineBtn.addEventListener("click", () => {
  for (let i = 0; i < onlineList.length; i++) {
    onlineList.item(i).classList.remove("disappear");
  }
});

recruitBtn.addEventListener("click", () => {
  for (let i = 0; i < recruitList.length; i++) {
    recruitList.item(i).classList.remove("disappear");
  }
});
