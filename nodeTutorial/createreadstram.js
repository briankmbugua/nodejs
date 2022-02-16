const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',
{
    highWaterMark: 9000,
    encoding: 'utf8'
});
//the size of the buffer is 64kb
//last buffer - remainder
// highWaterMark - control size

stream.on('data',(result)=> {
    console.log(result);
})

stream.on('error',(err)=>console.log(err));
