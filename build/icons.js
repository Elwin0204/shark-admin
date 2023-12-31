const fs = require('fs')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

function readFileList(path, filesList) {
  const files = fs.readdirSync(path)
  files.forEach(function (item) {
    const stat = fs.statSync(path + item)
    if (stat.isDirectory()) {
      readFileList(path + item + '\\', filesList)
    } else {
      const iconRegex = /\\icons\\(\w+)/
      const result = path.match(iconRegex)
      const noSuffix = item.replace(/\.[^/.]+$/, '')
      const fileName = result ? (result[1] + '/' + noSuffix) : noSuffix
      filesList.push(fileName)
    }
  })
}

function getFileList(path) {
  const filesList = []
  readFileList(path, filesList)
  return filesList
}

function generateFile(fileName, content) {
  if (content) {
    const filePath = path.resolve(__dirname, fileName)
    fs.writeFile(filePath, content, () => {});
  }
}

const iconPath = resolve('..') + '\\node_modules\\vue-awesome\\icons\\'
const icons = getFileList(iconPath)
generateFile('icons.json', JSON.stringify(icons))
