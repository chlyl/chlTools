const {app, BrowserWindow} = require('electron')
const path = require('path')
const { windowConfig } = require('./config')
const ball = require('./ball')
const html = path.join(__dirname, '../public/index.html')
require('./ipc')
var mainWindow = null;
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 160,
    show:false,
    ...windowConfig
  })
  mainWindow.loadFile(html)
  global.mainWindow = mainWindow;
}

app.whenReady().then(() => {
  require('./tray')
  ball.createWindow()
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})







