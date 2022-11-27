const badge = document.querySelector('.badge');
const badgeClose = document.querySelector('.close__badge');

badgeClose.addEventListener('click', () => {
  badge.style.opacity = '0';
});
