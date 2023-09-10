//! Clock Start
// document.addEventListener("DOMContentLoaded", () => {
//   let hours = document.getElementById("hrs");
//   let minute = document.getElementById("min");
//   let second = document.getElementById("sec");

//   let currentTime = new Date();
//   hours.innerHTML =
//     (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//   minute.innerHTML =
//     (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//   second.innerHTML =
//     (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

//   setInterval(() => {
//     currentTime = new Date();

//     hours.innerHTML =
//       (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//     minute.innerHTML =
//       (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//     second.innerHTML =
//       (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
//   }, 1000);
// });

document.addEventListener("DOMContentLoaded", () => {
  let hours = document.getElementById("hrs");
  let minute = document.getElementById("min");

  function updateClock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let ampm = currentHours >= 12 ? "PM" : "AM";

    // conversion to 12 hours
    currentHours = currentHours % 12;
    currentHours = currentHours ? currentHours : 12;

    hours.innerHTML = (currentHours < 10 ? "0" : "") + currentHours;
    minute.innerHTML =
      (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

    // add am or pm
    document.getElementById("ampm").innerHTML = ampm;
  }

  // display clock
  updateClock();

  // update clock
  setInterval(updateClock, 1000);
});

//! Clock End

//! Menu Function Start
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const humMenu = document.getElementById("hum-menu");
const body = document.body;
// let isMenuOpen = false;

openMenuBtn.addEventListener("click", () => {
  humMenu.style.left = "0%";
  body.style.overflow = "hidden";
});

closeMenuBtn.addEventListener("click", () => {
  humMenu.style.left = "-100%";
  body.style.overflow = "auto";
});
//! Menu Function End
