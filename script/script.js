const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItemsContainer = document.querySelector('.navItems-container');

hamburgerMenu.addEventListener('click', () => {
  navItemsContainer.classList.toggle('active');
});