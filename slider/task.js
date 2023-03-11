const volSlide = Array.from(document.getElementsByClassName("slider__item"));
const moveLeft = document.querySelector(`.slider__arrow_prev`);
const moveRight = document.querySelector(`.slider__arrow_next`);

moveLeft.onclick = () => checkShift(true);
moveRight.onclick = () => checkShift(false);

function checkShift(leftOrRight) {
  if (leftOrRight) {
    shiftSlideLeft();
  } else {
    shiftSlideRight();
  }
}

function shiftSlideLeft() {
  let posSlide = volSlide.findIndex(slide => slide.className.includes("slider__item_active"));
  volSlide[posSlide].classList.remove("slider__item_active");
  posSlide--;
  if (posSlide === -1) {
    posSlide = volSlide.length - 1;
  }
  volSlide[posSlide].classList.add("slider__item_active");
}

function shiftSlideRight() {
  let posSlide = volSlide.findIndex(slide => slide.className.includes("slider__item_active"));
  volSlide[posSlide].classList.remove("slider__item_active");
  posSlide++;
  if (posSlide === volSlide.length) {
    posSlide = 0;
  }
  volSlide[posSlide].classList.add("slider__item_active");
}