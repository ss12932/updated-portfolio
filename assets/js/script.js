"use strict";

//Declared Variables
const introReveal = document.querySelectorAll(".intro-reveal");
const header = document.querySelector(".header");
const anchorLink = document.querySelector(".anchor-link");
const learnMoreLink = document.querySelector(".learn-more-link");
const hamburger = document.querySelector(".hamburger");
const mobNavBar = document.querySelector(".mob-nav-bar");
const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");
const panels = document.querySelectorAll(".panel");

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
header.addEventListener("click", function (event) {
  //needed or smooth scrolling wont work. will instantly go onto next section.
  if (event.target.classList.contains("nav-link")) {
    event.preventDefault();
    const linkSection = event.target.getAttribute("href");
    document.querySelector(linkSection).scrollIntoView({ behavior: "smooth" });
  }
});

//smooth scrolling anchor link
anchorLink.addEventListener("click", function (event) {
  event.preventDefault();
  section2.scrollIntoView({ behavior: "smooth" });
});
learnMoreLink.addEventListener("click", function (event) {
  event.preventDefault();
  section3.scrollIntoView({ behavior: "smooth" });
});

//hamburger menu toggle active class
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobNavBar.classList.toggle("active");
});

//hamburger remove active class when link pressed.
document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    mobNavBar.classList.remove("active");
  })
);

const handleHoverImages = (e) => {
  const target = e.target;

  const hrefArr = [
    "./assets/img/tom-w-zwdkxQZu0Ko-unsplash.jpg",
    "./assets/img/ethan-thompson-zCYaSP5PHy8-unsplash.jpg",
    "./assets/img/gabriel-mccallin-bOGL5uq52X8-unsplash.jpg",
  ];

  if (target.matches("a")) {
    // const hrefRandomIndex = Math.floor(Math.random() * hrefArr.length + 1);
    // section1.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hrefArr[hrefRandomIndex]})`;
    const hrefLink = target.getAttribute("href");
    hrefArr.forEach((href, i) => {
      if (hrefLink === `#section-${i + 1}`) {
        section1.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${href})`;
      }
    });
  }
};

header.addEventListener("mouseover", handleHoverImages);

const allFadeSlideEl = document.querySelectorAll(".fadeSlideEl");
const revealFadeSlide = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  // console.log(entry);
  if (!entry.isIntersecting) return; //guard clause
  const animArr = [
    "translate-y-10",
    "opacity-0",
    "translate-x-10",
    "-translate-x-10",
  ];
  animArr.forEach((el) => entry.target.classList.remove(el));
  observer.unobserve(entry.target); //as we scroll down page, unobserve webpage better for performance.
};
const fadeSlideElObserver = new IntersectionObserver(revealFadeSlide, {
  root: null,
  threshold: 0.1, //10% visible. not right away
  rootMargin: "-50px",
});
allFadeSlideEl.forEach(function (fadeSlideEl) {
  fadeSlideElObserver.observe(fadeSlideEl);
});
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
