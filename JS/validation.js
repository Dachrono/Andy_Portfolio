const conForm = document.querySelector('.ContForm-cont');
const mail = document.getElementById('email');
const errMess = document.querySelector('.errMess');
errMess.style.display = 'none';

conForm.addEventListener('submit', (e) => {
  if (mail.value !== mail.value.toLowerCase()) {
    e.preventDefault();
    errMess.style.display = 'block';
  }
});