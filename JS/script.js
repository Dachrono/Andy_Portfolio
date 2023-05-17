// eslint-disable-next-line no-unused-vars
function hamFuntion() {
  if (document.getElementById('navBar').style.display === 'none') {
    document.getElementById('navBar').style.display = 'block';
    document.getElementById('menu').style.position = 'fixed';
    document.getElementById('barClose').src = 'Pics/Icons/xicon.png';
  } else {
    document.getElementById('navBar').style.display = 'none';
    document.getElementById('barClose').src = 'Pics/Icons/nav-icon.png';
  }
}

// eslint-disable-next-line no-unused-vars
function cerrar() {
  document.getElementById('navBar').style.display = 'none';
  document.getElementById('barClose').src = 'Pics/Icons/nav-icon.png';
}


///for the first commit 