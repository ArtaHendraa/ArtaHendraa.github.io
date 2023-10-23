const scriptURL =
  "https://script.google.com/macros/s/AKfycbzRsm9eqhKFh8luEkcRHjYvkPKDVRq7n98ECuc6l8XVerSVpEqXiXukBOBVMFkf52lk-g/exec";
const form = document.forms["artahendraa-contact-form"];

const btnSubmit = document.querySelector("#send-button");
const btnLoading = document.querySelector("#loading-btn");
const alertMassage = document.querySelector(".alert");
const alertFiledMassage = document.querySelector(".alert-filed");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("hidden");
  btnSubmit.classList.toggle("hidden");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("hidden");
      btnSubmit.classList.toggle("hidden");
      alertMassage.classList.toggle("hidden");
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alertFiledMassage.classList.toggle("hidden");
    });
});

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    alertMassage.classList.toggle("hidden");
  });
});
