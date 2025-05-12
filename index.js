const { app, BrowserWindow, shell } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // Load Gemini
    win.loadURL('https://gemini.google.com/');

    win.webContents.setWindowOpenHandler(({ url }) => {
        // whitelist gemini, login page and cookie consent, all other links open external
        if (url.startsWith("https://gemini.google.com/")
            || url.startsWith("https://consent.google.com/m?continue=https://gemini.google.com")
            || url.startsWith("https://accounts.google.com/v3/signin")) {
            return { action: 'allow' }
        } else {
            shell.openExternal(url)
            return { action: 'deny' }
        }
    })
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});