const path = require('path');
const url = require('url');
const util = require('util');
const { app, BrowserWindow, ipcMain } = require('electron');

let win = null;

const createWindow = () => {
  if (win === null) {
    win = new BrowserWindow({
      width: 1280,
      height: 720
    });

    win.loadURL(url.format({
      pathname: path.join(__dirname, '../public/index.html'),
      protocol: 'file:',
      slashes: true
    }));

    win.on('closed', () => {
      win = null;
    });
  }
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  createWindow();
});

ipcMain.on('CUSTOM_EVENT', (event, value) => {
  util.log('CUSTOM_EVENT:', value);
  app.quit();
});
