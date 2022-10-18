// toggle active class on header when clicked nav-toggle-btn

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");

navToggleBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

// toggle ctx-menu when click on card-menu-btn

const menuBtn = document.querySelectorAll("[data-menu-btn]");
for (const iterator of menuBtn) {
  iterator.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}
