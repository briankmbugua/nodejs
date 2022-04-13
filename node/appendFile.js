const fs = require('fs');

const content = '/n content appended to the end of the file'

fs.appendFile('write.txt',content,(err)=>{
    if(err) {
        console.error(err)
        return
    }

    console.log('append tp file succesful')
})