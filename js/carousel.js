document.addEventListener("DOMContentLoaded", function () {
  const slideshows = document.querySelectorAll(".carousel");
  
  slideshows.forEach(function (slideshow) {
    const slides = slideshow.querySelectorAll(".image");
    let currentSlide = 0;
    const slideCount = slides.length;
    const prevButton = slideshow.querySelector("#prevBtn");
    const playPauseButton = slideshow.querySelector("#playPauseBtn");
    const nextButton = slideshow.querySelector("#nextBtn");
    let isPlaying = true;
    let intervalId;

    function showSlide(n) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (n + slideCount) % slideCount;
      slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    function playPauseSlide() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playPauseButton.textContent = "Pause";
        intervalId = setInterval(nextSlide, 3000);
      } else {
        playPauseButton.textContent = "Play";
        clearInterval(intervalId);
      }
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
    playPauseButton.addEventListener("click", playPauseSlide);

    intervalId = setInterval(nextSlide, 3000);
  });
});