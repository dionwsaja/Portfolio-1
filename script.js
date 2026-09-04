document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  const icon = btn.querySelector("i");
  if (menu.classList.contains("hidden")) {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    const icon = btn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});
