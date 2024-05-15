const {app, BrowserWindow,globalShortcut} = require('electron')
const path = require('path')
const { windowConfig } = require('./config')
const ball = require('./ball')
const { log } = require('console')
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

  // mainWindow.on('blur',()=>{
  //   setTimeout(()=>{
  //     mainWindow.hide();
  //   },500)
  // })
}

app.whenReady().then(() => {
  require('./tray')
  ball.createWindow()
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0){
      createWindow()
    } 
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
//程序退出前 取消快捷键
app.on('will-quit',()=>{
  globalShortcut.unregisterAll();
})
// 禁用窗口动画
app.commandLine.appendSwitch('wm-window-animations-disabled');
