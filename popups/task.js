const popup = document.querySelector(`.modal`);
const popupSuccess = document.querySelector(`body > div:nth-child(3)`);
const popupClose = document.querySelector(`.modal__close`);
const popupCloseSuccess = document.querySelector(`body > div:nth-child(3) > div > div`);
const buttonSuccess = document.querySelector(`.show-success`);

popup.className = `modal modal_active`;

function closePopup() {
  popup.className = `modal`;
}
function closePopupSuccess() {
  popupSuccess.className = `modal`;
}
function showSuccess() {
  popupSuccess.className = `modal modal_active`;
  closePopup();
}

popupClose.onclick = closePopup;
popupCloseSuccess.onclick = closePopupSuccess;
buttonSuccess.onclick = showSuccess;