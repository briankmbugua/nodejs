const fs = require('fs')

console.log(fs.access("eventloop",fs.constants.R_OK | fs.constants.W_OK,(err)=>{
    console.log('checking permission for reading file');
    if(err) {
        console.error('No Read Access')
    }
    else {
        console.log('file can be read')
    }
}))