const form = document.querySelector('form');
const openUploadPopupButton = document.getElementById('upload-button');
const uploadPopupContainer = document.getElementById('upload-popup');

openUploadPopupButton.addEventListener('click', () => {
  uploadPopupContainer.style.display = 'block';
  uploadPopupContainer.classList.add('show');
});

const uploadButton = document.querySelector('#tNavRight #upload-button');
uploadButton.addEventListener('click', () => {
  uploadPopupContainer.style.display = 'block';
  uploadPopupContainer.classList.add('show');
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