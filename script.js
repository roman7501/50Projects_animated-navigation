const btnNav = document.getElementById("nav-toggle");
const nav = document.querySelector("nav");

btnNav.addEventListener("click", () => {
  nav.classList.toggle("hide");
});
