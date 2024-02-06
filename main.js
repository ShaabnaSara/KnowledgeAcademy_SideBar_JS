const menu = document.querySelector(".menu-icon");
const box = document.querySelector(".box");
const overlay = document.querySelector(".overlay");
const loader = document.querySelector(".loader");

overlay.classList.remove("overlay");
overlay.classList.add("hide");

menu.onclick = function () {
  menu.classList.toggle("active");
  box.classList.toggle("active");
  overlay.classList.toggle("overlay");
  overlay.classList.toggle("hide");
};
