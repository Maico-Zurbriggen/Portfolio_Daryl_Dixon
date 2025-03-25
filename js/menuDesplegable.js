/*MENU DESPLEGABLE*/
const burger = document.querySelector(".button-desplegable");
const nav = document.querySelector(".navegacion");

burger.addEventListener("click", () => {
  if (nav.classList.contains("nav-active")) {
    nav.classList.remove("nav-active");
    nav.classList.add("nav-desactivate");
  } else {
    nav.classList.remove("nav-desactivate");
    nav.classList.add("nav-active");
  }
});
