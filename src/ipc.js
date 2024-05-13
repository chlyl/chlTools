const { ipcMain,BrowserWindow,screen } = require('electron')

ipcMain.on('moveWindow',(e,message)=>{
    const window = BrowserWindow.getFocusedWindow();
    var x = window.getBounds().x;
    var y = window.getBounds().y;
    window.setBounds({x:x+message.x,y:y+message.y});
})