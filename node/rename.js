const fs = require('fs')

fs.rename('rename','renamed',err=>{
    if(err) {
        console.error(err)
        return
    }
    console.log('file renamed succesfully')
})