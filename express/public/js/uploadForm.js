const form = document.querySelector('form');
const openPopupButton = document.getElementById('upload-button');
const popupContainer = document.getElementById('upload-popup');

openPopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  fetch('/submit', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      alert('Submission added successfully!');
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
      alert('Error adding submission');
    });
});