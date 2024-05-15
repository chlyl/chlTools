const {Menu, Tray,app,globalShortcut} = require('electron')
const path = require('path')
const icon = path.join(__dirname, '../public/image/basketball.ico')
var tray = new Tray(icon)
const trayContextMenu = Menu.buildFromTemplate([ {
    label: '退出',
    click: () => {
      app.quit()
    }
  }
]);
tray.on('click', () => {
  global.mainWindow.isVisible() ? global.mainWindow.hide() : global.mainWindow.show();
})
tray.setContextMenu(trayContextMenu);
tray.setToolTip('chlTools');

globalShortcut.register('Ctrl+Space', () => {
  global.mainWindow.isVisible() ? global.mainWindow.hide() : global.mainWindow.show();
})
