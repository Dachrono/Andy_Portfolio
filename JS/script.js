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

const cardsInfo = [
  {
    name: 'The truck savers',
    description: 'Web application designed to keep track of the guarantees and services of a workshop for trailers, designed in HTML/CSS, php, DOM js',
    image: ['Pics/projects/truck/Captura.JPG', 'Pics/projects/truck/Captura3.JPG'],
    technologies: ['HTML', 'CSS', 'DOM JS', 'PHP'],
    live: 'http://appthetrucksavers.com/PagPrin.php',
    source: 'https://github.com/Dachrono/App-truck',
  },
  {
    name: 'AVA website',
    description: 'Complete website for direct marketing and promotions.',
    image: ['Pics/projects/AVA/ava1.png', 'Pics/projects/AVA/ava2.png'],
    technologies: ['CSS', 'HTML'],
    live: 'https://dachrono.github.io/AVA/',
    source: 'https://github.com/Dachrono/AVA',
  },
];

const cards = document.querySelector('.Cards');

function wCard(index) {
  const element = document.createElement('section');
  element.classList.remove(`WorksCard${index}`);
  element.classList.add(`WorksCard${index + 1}`);
  element.innerHTML = `
    <div class="card1">
      <img src="${cardsInfo[index].image[0]}" width="210px" alt="screnshot">
    </div>
    <div class="card2">
      <h1>${cardsInfo[index].name}</h1>
    </div>
    <ul class="card3">
      <li>${cardsInfo[index].technologies[0]}</li>
      <li>${cardsInfo[index].technologies[1]}</li>
      <li>${cardsInfo[index].technologies[2]}</li>
      <li>${cardsInfo[index].technologies[3]}</li>
    </ul>
    <div class="card4">
      <button class="CardBut">See project</button>
    </div>`;
  return element;
}

function popCard(index) {
  const newSec = document.createElement('section');
  newSec.classList.add('pop');
  document.querySelector('body').appendChild(newSec);
  const popup = document.querySelector('.pop');
  popup.innerHTML = `
    <div class="popFlex">
      <div class="closeButton">
        <button class="popClose"><img srcset="Pics/Icons/xiconW.png 767w, Pics/Icons/xicon.png 1124w" alt="Icon"></button>
      </div>
      
      <img class="projIma" srcset="${cardsInfo[index].image[1]} 767w, ${cardsInfo[index].image[1]} 1124w" alt="Photo">

      <div class="items">

        <h2 class="item1">${cardsInfo[index].name}</h2>

        <ul class="item2">
          <li>${cardsInfo[index].technologies[0]}</li>
          <li>${cardsInfo[index].technologies[1]}</li>
          <li>${cardsInfo[index].technologies[2]}</li>
          <li>${cardsInfo[index].technologies[3]}</li>
        </ul>

        <p class="item3">${cardsInfo[index].description}</p>

        <div class="popButton item4">
          <button onclick="location.href='${cardsInfo[index].source}'">See source<img src="Pics/Icons/IconExp.png" alt="icon"></button>
          <button onclick="location.href='${cardsInfo[index].live}'">See live<img src="Pics/Icons/IconGit.png" alt="icon"></button>
        </div>

      </div>  
    </div>
  `;
  return newSec;
}

function closePop(newSec) {
  const btnC = newSec.querySelector('.popClose');
  btnC.addEventListener('click', () => {
    newSec.remove();
  });
}

for (let i = 0; i < cardsInfo.length; i += 1) {
  const card = wCard(i);
  cards.appendChild(card);
  const butSelect = card.querySelector('.CardBut');
  butSelect.addEventListener('click', () => {
    const pop = popCard(i);
    closePop(pop);
  });
}