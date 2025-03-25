const buttonDarkMode = document.querySelector(".button-dark-mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

document.addEventListener("DOMContentLoaded", () => {
  const stateDarkMode = localStorage.getItem("dark-mode");
  if (stateDarkMode === "true") {
    body.classList.add("dark-mode");
    header.classList.add("dark-mode");
    main.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    buttonDarkMode.classList.add("active");
  }
});

buttonDarkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    buttonDarkMode.classList.add("active");
    localStorage.setItem("dark-mode", "true");
  } else {
    buttonDarkMode.classList.remove("active");
    localStorage.setItem("dark-mode", "false");
  }
});