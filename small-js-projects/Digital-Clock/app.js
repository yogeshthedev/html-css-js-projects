let clock = document.querySelector("#clock");

setInterval(() => {
  let dt = new Date();
  let sec = dt.getSeconds();
  let min = dt.getMinutes();
  let hour = dt.getHours();

  clock.innerText = `${hour}:${min}:${sec} `;
}, 1000);
