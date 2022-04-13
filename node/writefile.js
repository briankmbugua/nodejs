const fs = require('fs');

const content = "content that has been written"

fs.writeFile('write.txt',content,err=>{
    if(err) {
        console.error(err)
        return
    }
    console.log('file written succesfully')
})
