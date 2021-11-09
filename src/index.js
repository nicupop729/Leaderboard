import './style.css';

const scoresContainer = document.querySelector('.scores-container');

const dataArr = [
  {
    name: 'John Doe',
    score: 100,
  },
  {
    name: 'Annonym Annonymus',
    score: 78,
  },
  {
    name: 'Marcer Prousac',
    score: 99,
  },
];

const populateContainer = (value) => {
  value.forEach((el) => {
    const textHtml = `<p class="specific-score">${el.name}&#58; ${el.score}</p>`;
    scoresContainer.insertAdjacentHTML('afterbegin', textHtml);
  });
};

populateContainer(dataArr);
