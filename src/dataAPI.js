// eslint-disable-next-line import/no-cycle
import { populateContainer } from './index';

const displayMsg = document.querySelector('.display-msg');
const snakeGameID = 'DDoMF1efagARflNWqX7z';
const addressAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const renderMsg = (msg) => {
  displayMsg.textContent = msg;
};

export const sendNewData = (username, score) => {
  fetch(`${addressAPI}games/${snakeGameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((data) => {
      if (data.ok) {
        renderMsg('Succesfully added a new score');
      } else {
        throw new Error(`No response: ${data.status}`);
      }
    })
    .catch((err) => {
      renderMsg(`Something went wrong ${err.message}. Try again`);
    });
};

export const receiveData = async () => {
  const response = await fetch(`${addressAPI}games/${snakeGameID}/scores/`);
  const data = await response.json();
  const sortedScores = data.result.sort((a, b) => a.score - b.score);
  populateContainer(sortedScores);
};
