const carousel = document.querySelector('#carousel');

const images = document.querySelectorAll('.image');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const playPauseBtn = document.querySelector('#playPauseBtn');

let currentIndex = 0;
let timerId;

images[currentIndex].classList.add('active');

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function playPause() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    playPauseBtn.textContent = 'Play';
  } else {
    timerId = setInterval(nextImage, 3000);
    playPauseBtn.textContent = 'Pause';
  }
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
playPauseBtn.addEventListener('click', playPause);

timerId = setInterval(nextImage, 3000);