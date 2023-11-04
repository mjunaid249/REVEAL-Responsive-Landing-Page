let header = document.querySelector(".header");

let menu_btn = document.querySelector(".mobile-navbar-btn");

const toggle = () => {
  header.classList.toggle("active");
};

menu_btn.addEventListener("click", toggle);

let nav_links = document.querySelectorAll(".navbar-link");

Array.from(nav_links).forEach((btn) => {
  btn.addEventListener("click", toggle);
});
