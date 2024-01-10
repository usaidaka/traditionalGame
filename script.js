document.addEventListener("DOMContentLoaded", function () {
  const mobileNav = document.querySelector(".hamburger");
  const navbar = document.querySelector(".menubar");

  const toggleNav = () => {
    console.log("Test");
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
  };

  mobileNav.addEventListener("click", toggleNav);
});
