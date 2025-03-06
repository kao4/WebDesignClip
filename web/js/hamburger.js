const hamburger = document.querySelector(".js-hamburger");
const drawer = document.querySelector(".js-drawer");
const drawerLinks = document.querySelectorAll(".js-drawer a");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  drawer.classList.toggle("is-active");
  body.classList.toggle("drawer-active");
});

drawerLinks.forEach((drawerLink) => {
  drawerLink.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    drawer.classList.remove("is-active");
    body.classList.remove("drawer-active");
  });
});

drawer.addEventListener("click", () => {
  hamburger.classList.remove("is-active");
  drawer.classList.remove("is-active");
  body.classList.remove("drawer-active");
});
