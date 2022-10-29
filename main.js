const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./assets/icons/Icon_256x256.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // check if internet is available, if not, load local html file (./renderer/offline.html),file:///home/sanford/Downloads/loading-screen-animation/dist/index.html

  // else load the online html file (./renderer/loading.html) and load https://sanfordcorp.co
  // in the background, once it is loaded, load the url in the main window
  win.loadFile("./renderer/loading.html");
  // if internet is connected, load the online.html file
  win.webContents.on("did-finish-load", () => {
    win.webContents.executeJavaScript(
      `window.location.href = 'https://sanfordcorp.co'`
    );
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
