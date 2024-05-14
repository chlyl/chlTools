const { ipcMain,BrowserWindow,screen } = require('electron')

ipcMain.on('moveWindow',(e,message)=>{
    const window = BrowserWindow.getFocusedWindow();
    var x = window.getBounds().x;
    var y = window.getBounds().y;
    window.setBounds({x:x+message.x,y:y+message.y});
})

ipcMain.on('show',(e,message)=>{
    e.preventDefault();
    global.mainWindow.isVisible() ? global.mainWindow.hide() : global.mainWindow.show();
})