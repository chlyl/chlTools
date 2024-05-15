function clickBall(event){
    window.electron.ipcRenderer.send('show');
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') { 
        window.electron.ipcRenderer.send('hide');
    }
});