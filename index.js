const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "browser.js")
    }
  });

  win.loadURL("https://github.com");

  const page = win.webContents;
  page.on("dom-ready", () => {
    page.insertCSS(fs.readFileSync(path.join(__dirname, "theme.css"), "utf8"));

    console.log("MAIN -> ENABLING DARK MODE");
    win.webContents.send("enableDarkMode");

    win.show();
  });
};

app.on("ready", createWindow);
