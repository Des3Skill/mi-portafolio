const botones = document.querySelectorAll(".botones button");
const secciones = document.querySelectorAll(".seccion");

let seccionActual = document.querySelector(".seccion.activa");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const nuevaSeccion = document.getElementById(targetId);

    if (nuevaSeccion === seccionActual) return;

    // Quitar activa de la sección actual
    seccionActual.classList.remove("activa");

    // Activar nueva sección después de un pequeño delay (si querés animación saliente)
    setTimeout(() => {
      nuevaSeccion.classList.add("activa");
      seccionActual = nuevaSeccion;
    }, 50); // pequeño delay para que no se solapen
  });
});
