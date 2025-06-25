let clock = document.querySelector("#clock");

setInterval(() => {
  let dt = new Date();
  let sec = dt.getSeconds();
  let min = dt.getMinutes();
  let hour = dt.getHours();

  let period = hour > 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  clock.innerText = `${hour}:${min}:${sec} ${period} `;
}, 1000);
