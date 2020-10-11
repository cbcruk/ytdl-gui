const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

if (require('electron-squirrel-startup')) {
  app.quit()
}

const startUrl = isDev
  ? 'http://localhost:3000'
  : `file://${path.join(__dirname, '../build/index.html')}`

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 375,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadURL(startUrl)
  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.handle('ytdl', async (_event, args) => {
  const { stdout } = await exec(`youtube-dl ${args}`)
  return stdout
})
