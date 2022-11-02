let navbar = document.querySelector(".navbar");
let leftnav = document.querySelector(".left-nav");
let rightnav = document.querySelector(".right-nav");
let burger = document.querySelector(".h-burger");

burger.addEventListener("click", () => {
  navbar.classList.toggle("h-nav");
  leftnav.classList.toggle("v-class");
  rightnav.classList.toggle("v-class");
});
