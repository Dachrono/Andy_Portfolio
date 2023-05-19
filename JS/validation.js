const conForm = document.querySelector('.ContForm-cont');
const mail = document.getElementById('email');

conForm.addEventListener('submit', (e) => {
  if (mail.value !== mail.value.toLowerCase()) {
    e.preventDefault();
  }
});