const menuBtn = document.querySelector(".menu-bar");

const menuBar = document.querySelector(".account-panel");

menuBtn.addEventListener('click', () => {
    menuBar.classList.toggle("closed");
})