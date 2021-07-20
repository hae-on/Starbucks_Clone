const mainItems = document.querySelectorAll(".main__nav__items");
const coffeeTab = document.querySelector(".coffee__tab");

function startHover() {
  coffeeTab.style.display = "block";
}

function endHover() {
  coffeeTab.style.display = "none";
}

for (let i = 0; i < mainItems.length; i++) {
  let mainItem = mainItems.item(i);
  mainItem.addEventListener("mouseover", startHover);
  mainItem.addEventListener("mouseout", endHover);
}
