const displayMsg = document.getElementById('display-msg');

const renderMsg = (status, msg) => {
  displayMsg.classList.toggle(status);
  displayMsg.textContent = msg;
  displayMsg.style.display = 'block';
  setTimeout(() => {
    displayMsg.classList.toggle(status);
    displayMsg.style.display = 'none';
  }, 3000);
};

export const renderError = (msg) => {
  renderMsg('display-msg-error', msg);
};

export const renderSucces = (msg) => {
  renderMsg('display-msg-succes', msg);
};
