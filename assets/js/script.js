"use strict";

//Declared Variables
const introReveal = document.querySelectorAll(".intro-reveal");
const navLinks = document.querySelector(".header");
const anchorLink = document.querySelector(".anchor-link");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const section2 = document.querySelector("#section-2");

//Event Listeners
window.addEventListener("load", function (event) {
  event.preventDefault(); //on page load, unintended behaviour of section 1 title expanding to full size. this effect not intended.
  introReveal.forEach(function (span, i) {
    setTimeout(() => {
      span.classList.remove("opacity-0");
      span.classList.add("opacity-100");
    }, 1200 * i);
  });
});
//smooth scrolling nav bar
navLinks.addEventListener("click", function (event) {
  event.preventDefault(); //needed or smooth scrolling wont work. will instantly go onto next section.
  if (event.target.classList.contains("nav-link")) {
    const linkSection = event.target.getAttribute("href");
    document.querySelector(linkSection).scrollIntoView({ behavior: "smooth" });
  }
});

//smooth scrolling anchor link
anchorLink.addEventListener("click", function (event) {
  event.preventDefault();
  section2.scrollIntoView({ behavior: "smooth" });
});

//hamburger menu toggle active class
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

//hamburger remove active class when link pressed.
document.querySelectorAll(".nav-link ").forEach((link) =>
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  })
);
