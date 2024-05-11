// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain,Tray,Menu,screen} = require('electron')
const path = require('path')

const icon = path.join(__dirname, '../public/image/basketball.ico')
const html = path.join(__dirname, '../public/index.html')
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 60,
    height: 60,
    frame: false, // 无边框
    alwaysOnTop: true, // 置顶
    transparent: true, // 透明
    resizable: false, // 不可调整大小
    movable: true, // 可移动，默认为true，可根据需求调整
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox:false
    },
    icon:icon
  })
  mainWindow.loadFile(html)
  global.mainWindow = mainWindow;

  var tray = new Tray(icon)
  const trayContextMenu = Menu.buildFromTemplate([ {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ]);
  tray.setContextMenu(trayContextMenu);
  tray.setToolTip('chlTools');


  let size = screen.getPrimaryDisplay().workAreaSize
  var width = size.width
  var height = size.height
  mainWindow.setBounds({x:width-120,y:height-200})

}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


ipcMain.on('msg',(e,message)=>{
  console.log(456);
})






