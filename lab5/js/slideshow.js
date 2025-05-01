let gallery = ["1.webp", "2.jpeg", "3.jpeg", "4.jpg", "5.jpg"];
let imageContainer = document.querySelector("#imageContainer");
let currentIndex = 0;
imageContainer.src = `./assets/${gallery[currentIndex]}`;

function playNext() {
  currentIndex++;
  if (currentIndex > gallery.length - 1) {
    currentIndex = 0;
  }
  imageContainer.src = `./assets/${gallery[currentIndex]}`;
}

function playPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = gallery.length - 1;
  }
  imageContainer.src = `./assets/${gallery[currentIndex]}`;
}

let slideShow_interval;

function slideShow() {
  clearInterval(slideShow_interval);
  slideShow_interval = setInterval(() => {
    playNext();
  }, 1000);
}

function slideStop() {
  clearInterval(slideShow_interval);
}
