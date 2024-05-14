function clickBall(){
    window.electron.ipcRenderer.send('show');
}