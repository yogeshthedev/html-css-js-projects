let pass = document.querySelector("#password");
let showBtn = document.querySelector("#toggle");
let isVisible = false;
showBtn.addEventListener("click", () => {
  isVisible = !isVisible;
  pass.type = isVisible ? "text" : "password";
  showBtn.innerText = isVisible ? "Hide" : "Show";
});
