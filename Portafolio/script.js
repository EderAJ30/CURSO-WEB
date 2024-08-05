/* menu movil */

((d) => {
  // Selecciona el botón del menú con la clase '.menu-btn' y el menú con la clase '.menu'
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  // Agrega un event listener al botón del menú que escucha por un 'click'
  $btnMenu.addEventListener("click", (e) => {
    // Alterna la clase 'none' en el primer hijo del botón (generalmente un ícono de menú)
    $btnMenu.firstElementChild.classList.toggle("none");
    // Alterna la clase 'none' en el último hijo del botón (generalmente un ícono de cerrar)
    $btnMenu.lastElementChild.classList.toggle("none");
    // Alterna la clase 'is-active' en el menú, mostrando u ocultando el menú
    $menu.classList.toggle("is-active");
  });

  // Agrega un event listener al documento que escucha por un 'click'
  d.addEventListener("click", (e) => {
    // Si el elemento clicado no es un enlace dentro del menú, no hace nada
    if (!e.target.matches(".menu a")) return false;

    // Si se clicó un enlace dentro del menú:
    // Remueve la clase 'none' del primer hijo del botón (muestra el ícono de menú)
    $btnMenu.firstElementChild.classList.remove("none");
    // Agrega la clase 'none' al último hijo del botón (oculta el ícono de cerrar)
    $btnMenu.lastElementChild.classList.add("none");
    // Remueve la clase 'is-active' del menú (oculta el menú)
    $menu.classList.remove("is-active");
  });
})(document); // Inmediatamente invoca la función pasándole el objeto 'document'
