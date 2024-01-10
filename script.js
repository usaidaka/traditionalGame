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

// carousel

let currentImageIndex = 0;
const totalImages = 5;

function showImage(index) {
  const images = document.querySelectorAll(".image-list");
  const buttons = document.querySelectorAll(".carousel-indicator-off");

  images.forEach((image, i) => {
    image.style.display = i === index ? "block" : "none";
  });

  buttons.forEach((button, i) => {
    button.classList.toggle("carousel-indicator", i === index);
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentImageIndex);
});
