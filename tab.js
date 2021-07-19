const mainItems = document.querySelector(".main__nav__items");
const coffeeTab = document.querySelector(".coffee__tab");

function startHover() {
  coffeeTab.style.display = "block";
}

function endHover() {
  coffeeTab.style.display = "none";
}

mainItems.addEventListener("mouseover", startHover);
mainItems.addEventListener("mouseout", endHover);
