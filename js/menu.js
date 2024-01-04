const menuIcon = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');

document.querySelector('.menu').addEventListener("click", () => {
    menuIcon.classList.toggle('active');
    menuNav.classList.toggle('active');
});