const apiKey = "04ad76762d7f28275760f4121debbe74";
let input = document.querySelector("#city");
let btn = document.querySelector("#get-weather");
let card = document.querySelector("#weather-info");

async function call() {
  if (input.value.trim() === "") {
    card.innerHTML = `<p class="error">Write something!</p>`;
    return;
  }

  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value.trim()}&appid=${apiKey}&units=metric`
    );
    let result = await response.json();
    if (result.cod !== 200) {
      card.innerHTML = `<p class="error">City not found. Please try again.</p>`;
    } else {
      let data = ` <h3 class="location">${result.name} [ ${result.sys.country} ]</h3>
        <p class="temperature">${result.main.temp}°C</p>
        <p class="description">${result.weather[0].description}</p>
        <p class="details">Humidity: ${result.main.humidity}% | Wind: ${result.wind.speed}km/h</p>`;
      card.innerHTML = data;
    }
  } catch (error) {
    console.log("Somethings went wrong !" + error);
  }
}

btn.addEventListener("click", () => {
  call();
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") call();
});
