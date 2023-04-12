
const openLoginPopupButton = document.getElementById('login-button');
const loginPopupContainer = document.getElementById('login_popup');

openLoginPopupButton.addEventListener('click', () => {
  loginPopupContainer.style.display = 'block';
});
