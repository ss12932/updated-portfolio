"use strict";

//Declared Variables
const introReveal = document.querySelectorAll(".intro-reveal");
const header = document.querySelector(".header");
const anchorLink = document.querySelector(".anchor-link");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const section1 = document.querySelector("#section-1");
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
header.addEventListener("click", function (event) {
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

const handleHoverImages = (e) => {
  const target = e.target;
  if (target.matches("a")) {
    const href = target.getAttribute("href");
    if (href === "#section-1") {
      section1.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/img/tom-w-zwdkxQZu0Ko-unsplash.jpg')";
    }
    if (href === "#section-2") {
      section1.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/img/ethan-thompson-zCYaSP5PHy8-unsplash.jpg')";
    }
    if (href === "#section-3") {
      section1.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/img/gabriel-mccallin-bOGL5uq52X8-unsplash.jpg')";
    }
  }
};

navBar.addEventListener("mouseover", handleHoverImages);

const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return; //guard clause
  entry.target.classList.remove("opacity-0");
  observer.unobserve(entry.target); //as we scroll down page, unobserve webpage better for performance.
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, //15 visible. not right away
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
//sticky nav appears just before setion1, doesnt overlap any beginning part of section 1. + 90px will extend header section by 90x. use -90x. rem and percents dont work. nav appeared 90px before threshold reached. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. dont hard code 90x, if dynamic  website different devices. will chaneg at certain pts. best to change it dynamically
