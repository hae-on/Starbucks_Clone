const mainItems = document.querySelectorAll(".main__nav__items");
const coffeeTab = document.querySelector(".coffee__tab");
const tab = document.querySelector(".tab");

function startHover() {
  coffeeTab.classList.add("show");
  coffeeTab.classList.remove("hide");
}

function endHover() {
  setTimeout(function () {
    coffeeTab.classList.add("hide");
  }, 200);
  coffeeTab.classList.remove("show");
}

for (let i = 0; i < mainItems.length; i++) {
  let mainItem = mainItems.item(i);
  mainItem.addEventListener("mouseover", startHover);
  mainItem.addEventListener("mouseout", endHover);
  mainItem.addEventListener("mouseover", () => {
    tab.classList.add("tab__slide");
  });
  mainItem.addEventListener("mouseout", () => {
    tab.classList.remove("tab__slide");
  });
}
