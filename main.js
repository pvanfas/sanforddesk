const path = require("path");
const { app, BrowserWindow } = require("electron");

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "SanfordCorp",
    });

    mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
}

app.whenReady().then(createMainWindow);