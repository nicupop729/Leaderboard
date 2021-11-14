// eslint-disable-next-line import/no-cycle
import { populateContainer } from './index';
import { renderError, renderSucces } from './render-message';

const snakeGameID = 'dyFFy2q2gVjjtQISw234';
const addressAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

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
        renderSucces('Succesfully added a new score');
      } else {
        throw new Error('Please provide valid username and score');
      }
    })
    .catch((err) => {
      renderError(`Something went wrong: ${err.message}. Try again`);
    });
};

export const receiveData = async () => {
  const response = await fetch(`${addressAPI}games/${snakeGameID}/scores/`);
  const data = await response.json();
  const sortedScores = data.result.sort((a, b) => a.score - b.score);
  populateContainer(sortedScores);
};
