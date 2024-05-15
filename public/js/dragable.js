//鼠标按下

document.getElementById('dragable').addEventListener('mousedown', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    document.onmousemove = function (e) {
        e.preventDefault();
        //鼠标移动 距离
        var moveX = e.clientX - x;
        var moveY = e.clientY - y;
        //通知客户端移动
        window.electron.ipcRenderer.send('moveWindow',{x:moveX,y:moveY});
    }
    document.onmouseup = function (e) {
        e.preventDefault();
        //鼠标松开
        document.onmousemove = null;
    }
});


