const bannerList = document.querySelectorAll(".banner__content");

var idx = 0;
function moveBanner() {
  for (var i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  bannerList[idx].style.display = "block";
  idx++;

  if (idx >= bannerList.length) {
    idx = 0;
  }
}
setInterval(moveBanner, 2000);
