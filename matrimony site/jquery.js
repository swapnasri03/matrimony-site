$(document).ready(function () {
  const $slider = $('.slider');
  const $slides = $slider.find('.slides');
  const $slide = $slider.find('.slide');
  const slideCount = $slide.length;
  let currentIndex = 0;

  function goToSlide(index) {
    const offset = -index * 100;
    $slides.css('transform', 'translateX(' + offset + '%)');
  }

  setInterval(function () {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }, 3000);
});
