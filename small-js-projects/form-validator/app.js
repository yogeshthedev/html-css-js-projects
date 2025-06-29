const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  isValid = true;

  if (nameInput.value.trim() === "") {
    alert("Name is required");
    isValid = false;
  }

  if (!emailInput.value.includes("@")) {
    alert("Email is required");
    isValid = false;
  }

  if (!(passwordInput.value.length > 6)) {
    alert("Password need more than 6 character ");
    isValid = false;
  }

  if (isValid) {
    alert("Form is submitted");
    form.submit();
  }
});
