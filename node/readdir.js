const path = require('path')
const fs = require('fs')

const folderPath = 'brian'

console.log(fs.readdirSync(folderPath))//return folders and files
console.log(fs.readdirSync(folderPath).map(filename => {
    return path.join(folderPath, filename)
}))