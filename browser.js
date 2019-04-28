const electron = require("electron");

const ipc = electron.ipcRenderer;

const enableDarkMode = () => {
  console.log("RENDERER -> ENABLING DARK MODE");
  document.documentElement.classList.toggle("dark-mode", true);
};

ipc.on("enableDarkMode", enableDarkMode);
