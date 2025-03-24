/*JAVASCRIPT PARA REUTILIZAR LA NAVEGACIÓN Y EL FOOTER*/

document.addEventListener("DOMContentLoaded", () => {
  /*NAVEGACIÓN*/
  fetch("navegacion.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navegacion").innerHTML = data;
    });

  /*FOOTER*/
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
