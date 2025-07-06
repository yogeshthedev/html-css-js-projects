const images = [
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1016/800/600",
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1021/800/600",
  "https://picsum.photos/id/1024/800/600",
];

let carouselImage = document.querySelector("#carousel-img");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let currIndex = 0;

nextBtn.addEventListener("click", () => {
  if (currIndex < images.length - 1) {
    currIndex++;
    carouselImage.src = images[currIndex];
  } else {
    currIndex = 0;
    carouselImage.src = images[currIndex];
  }
});

prevBtn.addEventListener("click", () => {
  if (currIndex == 0) {
    currIndex = images.length - 1;
    carouselImage.src = images[currIndex];
  } else {
    currIndex--;
    carouselImage.src = images[currIndex];
  }
});
