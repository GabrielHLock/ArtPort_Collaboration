
const openPopupButton = document.getElementById('login-button');
const popupContainer = document.getElementById('login_popup');

openPopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});
