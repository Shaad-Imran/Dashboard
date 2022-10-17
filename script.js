// toggle active class on header when clicked nav-toggle-btn

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");

navToggleBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});
