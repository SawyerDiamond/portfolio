"use strict";

//Sticky Navigation

window.onscroll = function () {
  myFunction();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const button = document.getElementById("buttonUp");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
