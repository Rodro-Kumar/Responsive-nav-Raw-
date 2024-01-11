const bar = document.querySelector(".bar");
const nav2 = document.querySelector(".nav-2");
const logo = document.querySelector(".logo");
const hover = document.querySelector(".hover");
bar.addEventListener("click", function () {
  if (nav2.classList.toggle("nav-2-active")) {
    logo.style.opacity = "0";
  } else {
    logo.style.opacity = "1";
  }
});

hover.addEventListener("click", function () {
  console.log("hlello");
});
