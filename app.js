const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  //these are all the individual links
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger animation rotate
    burger.classList.toggle("toggle");
  });
};

//when invoking multiple functions

// const app = ()=> {
// call fucntions here
// }
navSlide();

var current = 0,
  slides = document.getElementsByClassName("img-slide");

setInterval(function () {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = current != slides.length - 1 ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);
