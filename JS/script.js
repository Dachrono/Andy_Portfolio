// eslint-disable-next-line no-unused-vars
function hamFuntion() {
  if (document.getElementById('navBar').style.display === 'none') {
    document.getElementById('navBar').style.display = 'block';
    document.getElementById('menu').style.position = 'flex';
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
    name: 'Gourmet Experience - Final capstone project',
    description: 'This project consists of a web application built with ReactJS and Redux Toolkit that allows users to book gourmet experiences that they can give to others, in a quick and easy way.',
    image: ['Pics/projects/Gourmet1.png', 'Pics/projects/Gourmet2.png'],
    technologies: ['Ruby on Rails', 'React/Redux', 'API', 'PostgreSql'],
    live: 'https://gourmet-experiences-app.onrender.com/login',
    source: 'https://github.com/Dachrono/final_capstone_front_end',
  },
  {
    name: 'Budget app - Capstone project',
    description: 'The Ruby on Rails capstone project is about building a mobile web application where you can manage your budget',
    image: ['Pics/projects/Budget1.png', 'Pics/projects/Budget2.png'],
    technologies: ['Ruby on Rails', 'PostgreSql', 'HTML', 'CSS'],
    live: 'https://budget-app-hisl.onrender.com/',
    source: 'https://github.com/Dachrono/Budget-app',
  },
  {
    name: 'The truck savers',
    description: 'Web application designed to keep track of the guarantees and services of a workshop for trailers, designed in HTML/CSS, PHP',
    image: ['Pics/projects/truck/Captura.JPG', 'Pics/projects/truck/Captura3.JPG'],
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    live: 'https://github.com/Dachrono/App-truck',
    source: 'https://github.com/Dachrono/App-truck',
  },
  {
    name: 'AVA website',
    description: 'Complete website for direct marketing and promotions.',
    image: ['Pics/projects/AVA/ava1.png', 'Pics/projects/AVA/ava2.png'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    live: 'https://dachrono.github.io/AVA/',
    source: 'https://github.com/Dachrono/AVA',
  },
];

const cards = document.querySelector('.Cards');

function wCard(index) {
  const element = document.createElement('section');
  // element.classList.add(`WorksCard${index}`);
  element.innerHTML = `
    <div class="card1">
      <img src="${cardsInfo[index].image[0]}" width="210px" alt="screnshot">
    </div>
    <div class="card2">
      <h2>${cardsInfo[index].name}</h2>
    </div>
    <ul class="card3">
      <li>${cardsInfo[index].technologies[0]}</li>
      <li>${cardsInfo[index].technologies[1]}</li>
      <li>${cardsInfo[index].technologies[2]}</li>
      <li>${cardsInfo[index].technologies[3]}</li>
    </ul>
    <div class="card4">
      <button type="button" class="CardBut">See project</button>
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
        
        <p class="item3">${cardsInfo[index].description}</p>

        <h3 class="item5">Technologies used</h3>

        <ul class="item2">
          <li>${cardsInfo[index].technologies[0]}</li>
          <li>${cardsInfo[index].technologies[1]}</li>
          <li>${cardsInfo[index].technologies[2]}</li>
          <li>${cardsInfo[index].technologies[3]}</li>
        </ul>


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