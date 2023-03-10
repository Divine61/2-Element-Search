const moveLeft = document.querySelector(`.slider__arrow_prev`);
const moveRight = document.querySelector(`.slider__arrow_next`);
const volumeSlide = document.querySelectorAll(`.slider__item`).length;
const firstSlide = document.querySelector(`.slider__item`);
const lastSlide = document.querySelector(`body > div > div > div:last-child`);

let numSlide = 1;
let leftOrRight;

function checkShift(leftOrRight) {
  if (leftOrRight) {
    shiftSlideLeft();
  } else {
    shiftSlideRight();
  }
}

function shiftSlideLeft() {
  numSlide--;
  let prevSlide = document.querySelector(`.slider__item_active`);
  if (numSlide <= 0) {
    lastSlide.className = `slider__item slider__item_active`;
    prevSlide.className = `slider__item`;
    numSlide = volumeSlide;
  } else {
    ( document.querySelector(`body > div > div > div:nth-child(${numSlide})`) ).className = `slider__item slider__item_active`;
    prevSlide.className = `slider__item`;
  }
}

function shiftSlideRight() {
  numSlide++;
  let prevSlide = document.querySelector(`.slider__item_active`);
  if (numSlide > volumeSlide) {
    firstSlide.className = `slider__item slider__item_active`;
    prevSlide.className = `slider__item`;
    numSlide = 1;
  } else {
    prevSlide.className = `slider__item`;
    ( document.querySelector(`body > div > div > div:nth-child(${numSlide})`) ).className = `slider__item slider__item_active`;
    
  }
}

moveLeft.onclick = () => checkShift(true);
moveRight.onclick = () => checkShift(false);