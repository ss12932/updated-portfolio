"use strict";

//Declared Variables
const navLinks = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

//Event Listeners

//smooth scrolling nav bar
navLinks.addEventListener("click", function (event) {
  event.preventDefault(); //needed or smooth scrolling wont work. will instantly go onto next section.
  if (event.target.classList.contains("nav-link")) {
    const linkSection = event.target.getAttribute("href");
    document.querySelector(linkSection).scrollIntoView({ behavior: "smooth" });
  }
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
