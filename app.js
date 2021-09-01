const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $("header.header");
const navBar = $("nav");
window.addEventListener("scroll", () => {
  if (header.getBoundingClientRect().top < 0) {
    navBar.classList.remove("bg-transparent");
    navBar.classList.add("bg-dark");
  }
  if (header.getBoundingClientRect().top === 0) {
    navBar.classList.remove("bg-dark");
    navBar.classList.add("bg-transparent");
  }
});
