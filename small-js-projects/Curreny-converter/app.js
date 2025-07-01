const rates = {
  USD: 1,
  EUR: 0.85,
  INR: 75,
  GBP: 0.75,
  JPY: 110,
};

let amount = document.querySelector("#amount");
let fromCurrency = document.getElementById("from-currency");
let toCurrency = document.getElementById("to-currency");
let converBtn = document.querySelector("#convert");
let result = document.querySelector("#result");

converBtn.addEventListener("click", () => {
  if (amount.value == "") {
    result.innerText = "Please enter amount";
  } else if (amount.value <= 0) {
    result.innerText = "Write Valid Amount";
    let convertedAmount =
      (amount.value / rates[fromCurrency.value]) * rates[toCurrency.value];
    result.innerText = convertedAmount.toFixed(2);
  }
});
