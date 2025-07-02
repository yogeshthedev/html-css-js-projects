const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

let quote = document.querySelector("#quote");
let autor = document.querySelector("#author");
let newQuote = document.querySelector("#new-quote");


newQuote.addEventListener("click", () => {
    let random = Math.floor(Math.random() * (quotes.length));
    quote.innerText = quotes[random].text;
    autor.innerText = quotes[random].author;
});
