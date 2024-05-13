// 悬浮球
const {BrowserWindow,screen } = require('electron')
const path = require('path');
const { windowConfig } = require('./config');
var ballWindow = null;
const html = path.join(__dirname, '../public/ball.html')
function createWindow () {
    ballWindow = new BrowserWindow({
      width: 60,
      height: 60,
      ...windowConfig
    })
    ballWindow.loadFile(html)
    global.ballWindow = ballWindow;
    let size = screen.getPrimaryDisplay().workAreaSize
    var width = size.width
    var height = size.height
    ballWindow.setBounds({x:width-120,y:height-200})
}

module.exports = {
    createWindow
}