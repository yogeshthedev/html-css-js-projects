let songs = [
  {
    name: "song1.mp3",
    title: "Meri tarha",
    artist: "Akhil Redhu",
    image: "song1.jpg",
  },
  {
    name: "song2.mp3",
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "song2.jpg",
  },
];
let count = 0;

function updatePlayer() {
  let coverImg = document.querySelector(".cover img");
  let coverTitle = document.querySelector("#title");
  let coverArtist = document.querySelector("#artist");

  coverImg.src = `song/${songs[count].image}`;
  coverTitle.innerText = songs[count].title;
  coverArtist.innerText = songs[count].artist;
  audioPlayer.src = `song/${songs[count].name}`;
}

let audioPlayer = document.querySelector("#audio");

let play = document.querySelector("#play");
let next = document.querySelector("#next");

play.addEventListener("click", function () {
  updatePlayer();
  if (audioPlayer.paused) {
    audioPlayer.play();
    play.innerText = "⏸";
  } else {
    audioPlayer.pause();
    play.innerText = "▶️";
  }
});

next.addEventListener("click", function () {

  count++;
  updatePlayer();
  play.innerText = "▶️";
});
