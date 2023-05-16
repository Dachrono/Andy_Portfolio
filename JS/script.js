// eslint-disable-next-line no-unused-vars
function hello() {
  const a = document.getElementById('navBar').style.display;

  if (a === 'none') {
    document.getElementById('navBar').style.display = 'block';
    document.getElementById('menu').style.position = 'fixed';
  } else {
    document.getElementById('navBar').style.display = 'none';
  }
}