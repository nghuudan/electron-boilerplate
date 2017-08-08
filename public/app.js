const { ipcRenderer } = require('electron');

const quitButton = document.querySelector('#quitButton');

quitButton.addEventListener('click', () => {
  ipcRenderer.send('CUSTOM_EVENT', 'quitButton');
}, false);
