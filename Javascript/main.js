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

//Modals for Projects

const modal = document.querySelector(".modal-background");
const btnCloseModal = document.querySelector(".modal-background-right-close");
const btnsOpenModal = document.querySelectorAll(".projects-item");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button Click");
  });
