const icon = document.getElementById("menu");
const navbar = document.querySelector(".nav-links");

icon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
