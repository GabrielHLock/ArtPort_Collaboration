const form = document.querySelector('form');
const openUploadPopupButton = document.getElementById('upload-button');
const uploadPopupContainer = document.getElementById('upload-popup');
const closeuploadPopupButton = document.getElementById('uploadclosebutton');
const imagePreviewOutput = document.querySelector('#imagePreview output');
const photoInput = document.querySelector('#photo');

openUploadPopupButton.addEventListener('click', () => {
  uploadPopupContainer.style.display = 'block';
  uploadPopupContainer.classList.add('show');
});

closeuploadPopupButton.addEventListener('click', () => {
  uploadPopupContainer.style.display = 'none';
});


const uploadButton = document.querySelector('#tNavRight #upload-button');
uploadButton.addEventListener('click', () => {
  uploadPopupContainer.style.display = 'block';
  uploadPopupContainer.classList.add('show');
});

// Image preview function
function previewImage(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    imagePreviewOutput.innerHTML = `<img src="${reader.result}" />`;
  };
}

// Listen for file input changes
photoInput.addEventListener('change', () => {
  const file = photoInput.files[0];
  if (file) {
    previewImage(file);
  } else {
    imagePreviewOutput.innerHTML = '';
  }
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