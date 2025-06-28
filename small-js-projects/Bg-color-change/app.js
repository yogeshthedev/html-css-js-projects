let btn = document.querySelector("#change-color");
let span = document.querySelector("#color");
let toogleBtn = document.querySelector("#toggle");

let r, g, b;
let isHex = false;
let rgb;
btn.addEventListener("click", () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  rgb = span.innerText = `rgb(${r},${g},${b})`;
  isHex = false
});

toogleBtn.addEventListener("click", () => {

    let rhex = r.toString(16).padStart(2, "0");
    let ghex = g.toString(16).padStart(2, "0");
    let bhex = b.toString(16).padStart(2, "0");
    let hex = `#${rhex}${ghex}${bhex}`;

    isHex = !isHex;
    span.innerText = isHex ? hex : rgb;
  });
  

  span.addEventListener('click',()=>{
    navigator.clipboard.writeText(span.innerText);
  })