const openLoginPopupButton = document.getElementById('login-button');
const loginPopupContainer = document.getElementById('login_popup');
const closePopupButton = document.getElementById('loginclosebutton');

openLoginPopupButton.addEventListener('click', () => {
  loginPopupContainer.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  loginPopupContainer.style.display = 'none';
});
