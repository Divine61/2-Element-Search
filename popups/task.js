const popups = document.querySelectorAll(`.modal`);
const buttonSuccess = document.querySelector(`.show-success`);
const popapSuccess = document.querySelector(`.btn_success`);

(function() {
  popups.forEach(popap => {
    if (!popap.querySelector(`.btn_success`)) {
      popap.className = `modal modal_active`;
    }
    popap.querySelector(`.modal__close`).onclick = closePopup;
    popap.querySelector(`.show-success`).onclick = showSuccess;
  })
}());

function closePopup() {
  this.closest(`.modal`).className = `modal`;
}

function showSuccess() {
  buttonSuccess.closest(`.modal`).className = `modal`;
  popapSuccess.closest(`.modal`).className = `modal modal_active`;
}