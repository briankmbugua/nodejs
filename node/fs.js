const fs = require('fs');
const path = require('path')

fs.readFile(path.resolve('text.txt'),'utf8',(err,data)=>{
    if(err) {
        console.error(err)
        return;
    }
    console.log(data)
})

console.log(path.resolve('text.txt'))