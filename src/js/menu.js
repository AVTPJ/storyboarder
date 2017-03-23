const {Menu} = require('electron').remote
const {ipcRenderer} = require('electron')

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open...',
        accelerator: 'CmdOrCtrl+O',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('openDialogue')
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Export Treatment...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportTreatment')
        }
      },
      {
        label: 'Export to Fountain Screenplay...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportFountain')
        }
      },
      {
        label: 'Export to Outliner...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportOutliner')
        }
      },
      {
        label: 'Export to CSV file...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportCSV')
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Export poster to PDF...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportPoster')
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+P',
        label: 'Print current scene worksheet...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('printWorksheet')
        }
      },
      {
        accelerator: 'CmdOrCtrl+I',
        label: 'Import worksheets...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('importWorksheets')
        }
      },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      }
    ]
  },
  {
    label: 'Navigation',
    submenu: [
      {
        label: 'Play',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('togglePlayback')
        }
      },
      {
        type: 'separator'
      },
      {
        // accelerator: 'Left',
        label: 'Previous Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('goPreviousBoard')
        }
      },
      {
        // accelerator: 'Right',
        label: 'Next Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('goNextBoard')
        }
      },
      {
        accelerator: 'CmdOrCtrl+Left',
        label: 'Previous Scene',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('previousScene')
        }
      },
      {
        accelerator: 'CmdOrCtrl+Right',
        label: 'Next Scene',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('nextScene')
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+S',
        label: 'Toggle speaking',
        type: 'checkbox',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('toggleSpeaking')
        }
      }
    ]
  },
  {
    label: 'Boards',
    submenu: [
      {
        accelerator: 'N',
        label: 'New Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('newBoard', 1)
        }
      },
      {
        accelerator: 'Shift+N',
        label: 'New Board Before',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('newBoard', -1)
        }
      },
      {
        accelerator: 'CmdOrCtrl+Backspace',
        label: 'Delete Board(s)',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('deleteBoards')
        }
      },
      {
        accelerator: 'CmdOrCtrl+Delete',
        label: 'Delete Board(s) - Go Forward',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('deleteBoards', 1)
        }
      },
      {
        accelerator: 'D',
        label: 'Duplicate Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('duplicateBoard')
        }
      },
      {
        accelerator: 'Alt+Left',
        label: 'Reorder Left',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('reorderBoardsLeft')
        }
      },
      {
        accelerator: 'Alt+Right',
        label: 'Reorder Right',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('reorderBoardsRight')
        }
      },
    ]
  },
  {
    label: 'Tools',
    submenu: [
      {
        accelerator: '1',
        label: 'Light Pencil',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'lightPencil')
        }
      },
      {
        accelerator: '2',
        label: 'Pencil',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'pencil')
        }
      },
      {
        accelerator: '3',
        label: 'Pen',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'pen')
        }
      },
      {
        accelerator: '4',
        label: 'Brush',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'brush')
        }
      },
      {
        accelerator: '5',
        label: 'Note Pen',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'notePen')
        }
      },
      {
        accelerator: '6',
        label: 'Eraser',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'eraser')
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'Backspace',
        label: 'Clear Canvas',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('clear')
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: '[',
        label: 'Smaller Brush',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('brushSize', -1)
        }
      },
      {
        accelerator: ']',
        label: 'Larger Brush',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('brushSize', 1)
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+F',
        label: 'Flip Horizontal',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('flipBoard')
        }
      },
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Cycle View Mode',
        accelerator: 'Tab',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('cycleViewMode')
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'F11',
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://www.setpixel.com') }
      }
    ]
  }
]



const addDarwinFeatures = template => {
  const name = require('electron').remote.app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })
}
if (process.platform === 'darwin') {
  addDarwinFeatures(template)
  // // Edit menu.
  // template[1].submenu.push(
  //   {
  //     type: 'separator'
  //   },
  //   {
  //     label: 'Speech',
  //     submenu: [
  //       {
  //         role: 'startspeaking'
  //       },
  //       {
  //         role: 'stopspeaking'
  //       }
  //     ]
  //   }
  // )
  // Window menu.
  template[7].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}


const welcomeTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open...',
        accelerator: 'CmdOrCtrl+O',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('openFile')
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'copy'
      },
      {
        role: 'paste'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+F',
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://www.setpixel.com') }
      }
    ]
  }
]
if (process.platform === 'darwin') {
  addDarwinFeatures(welcomeTemplate)
}

const menuInstance = Menu.buildFromTemplate(template)
const welcomeMenuInstance = Menu.buildFromTemplate(welcomeTemplate)

const menu = {
  setWelcomeMenu: function() {
    Menu.setApplicationMenu(welcomeMenuInstance)
  },
  setMenu: function() {
    Menu.setApplicationMenu(menuInstance)
  }
}

module.exports = menu