const conForm = document.querySelector('.ContForm-cont');
const mail = document.getElementById('email');

conForm.addEventListener('submit', (e) => {
  if (mail.value !== mail.value.toLowerCase()) {
    e.preventDefault();
    const emailLC = mail.value.toLowerCase();
    mail.value = emailLC;
    // eslint-disable-next-line no-alert
    alert('Please enter your email in all lowercase, we do it for you only check it if it is ok');
  }
});