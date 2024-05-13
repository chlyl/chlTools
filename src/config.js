const path = require('path')
const icon = path.join(__dirname, '../public/image/basketball.ico')

module.exports = {
    windowConfig:{
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
    }
}