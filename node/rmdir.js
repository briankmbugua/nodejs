const fs = require('fs');
const dir = 'brian'
fs.rm(dir, {recursive: true},(err)=> {
    if(err) {
        throw err;
    }

    console.log(`${dir} is deleted`)
})