let counter = document.querySelector("#count");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let card = document.querySelector(".container");

let count = 0;
counter.style.backgroundColor = "blue";

function updateUI() {
  if (count < 0) {
    counter.style.backgroundColor = "red";
  } else if (count > 0) {
    counter.style.backgroundColor = "green";
  } else {
    counter.style.backgroundColor = "blue";
  }

  if (count <= -10) {
    decrease.disabled = true;
  }

  if (count >= 10) {
    increase.disabled = true;
  }

  if (count > -10) decrease.disabled = false;
  if (count < 10) increase.disabled = false;
  
  counter.innerText = count;
  counter.classList.add("animate");
  setTimeout(() => {
    counter.classList.remove("animate");
  }, 100);
}

decrease.addEventListener("click", () => {
  count--;
  updateUI();
});

increase.addEventListener("click", () => {
  count++;
  updateUI();
});
reset.addEventListener("click", () => {
  count = 0;
  updateUI();
});
