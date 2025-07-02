let display = document.querySelector("#display");

let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let reset = document.querySelector("#reset");

let sec = 0;
let min = 0;
let hr = 0;
let timer;

function addOne(e) {
  if (e < 10) {
    return `0${e}`;
  } else {
    return e;
  }
}

start.addEventListener("click", () => {
  timer = setInterval(() => {
    sec++;
    display.innerText = `${addOne(hr)}:${addOne(min)}:${addOne(sec)}`;

    if (sec > 59) {
      min++;
      sec = 0;
    }
    if (min > 59) {
      hr++;
      sec = 0;
      min = 0;
    }
  }, 1000);

  start.disabled = true;
});

pause.addEventListener("click", () => {
  clearInterval(timer);
  pause.disabled = true
  start.disabled = false
});

reset.addEventListener("click", () => {
  sec = 0;
  min = 0;
  hr = 0;
  display.innerText = `${addOne(hr)}:${addOne(min)}:${addOne(sec)}`;
  clearInterval(timer);
  pause.disabled = false
  start.disabled = false;
});
