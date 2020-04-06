/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function () {
  console.log("main.js file loaded");
}));

window.onload = function () {
  const navBtn = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  const navList = document.getElementById("nav-list");
  const navBtnOpen = document.getElementById("open");
  const navBtnClose = document.getElementById("close");

  navBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    navBtnOpen.classList.toggle("close");
    navBtnClose.classList.toggle("open");
    navBtnClose.classList.toggle("close");
    nav.classList.toggle("overlay");
  });
};
