var controls = document.querySelector('.controls');
var slides = document.querySelectorAll('.slide');
var controlDots = controls.querySelectorAll('.controls__dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,300);

function nextSlide() {
  slides[currentSlide].classList.remove('slide_visible');
  controlDots[currentSlide].classList.remove('controls__dot_check');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('slide_visible');
  controlDots[currentSlide].classList.add('controls__dot_check');
}



function onClickControl(evt) {
  var target = evt.target;
  var controlDotCheck = controls.querySelector('.controls__dot_check');

  function replaceSlide() {
    controlDotCheck.classList.remove('controls__dot_check');
    currentSlide = target.getAttribute('rel') - 1;
    document.querySelector('.slide_visible').classList.remove('slide_visible');
    slides[currentSlide].classList.add('slide_visible');
  }


  if (target.classList.contains('controls__item')) {
    replaceSlide();
    target.querySelector('.controls__dot').classList.add('controls__dot_check');
  }

  if (target.classList.contains('controls__dot')) {
    replaceSlide();
    target.classList.add('controls__dot_check');
  }
}

controls.addEventListener('click', onClickControl);
