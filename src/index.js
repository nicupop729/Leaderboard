import './style.css';
// eslint-disable-next-line import/no-cycle
import { sendNewData } from './dataAPI';

// eslint-disable-next-line import/prefer-default-export
export const scoresContainer = document.querySelector('.scores-container');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const addScoreBtn = document.querySelector('.submit-btn');
// const refreshBtn = document.querySelector('.refresh-btn');

// const populateContainer = (value) => {
//   value.forEach((el) => {
//     const textHtml = `<li class="specific-score">${el.name}&#58; ${el.score}</li>`;
//     scoresContainer.insertAdjacentHTML('afterbegin', textHtml);
//   });
// };

const addScoreFunc = () => {
  sendNewData(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
};

window.onload = () => {
  // updateCont();

  addScoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addScoreFunc();
  });

  // refreshBtn.addEventListener('click', () => {
  //   updateCont();
  // });
};
