// Mobile Menu
const hambugerIcon = document.querySelector('.mobile-hamburger-menu');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.querySelector('.mobile-menu');

function menuClick() {
  hambugerIcon.style.display = 'none';
  mobileMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

hambugerIcon.addEventListener('click', menuClick);

function closeClick() {
  hambugerIcon.style.display = 'flex';
  mobileMenu.style.display = 'none';
  document.body.style.overflow = 'visible';
}

closeIcon.addEventListener('click', closeClick);
