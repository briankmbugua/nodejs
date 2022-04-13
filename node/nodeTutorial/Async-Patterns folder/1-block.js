
const http = require("http"); 

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page")
  }
  else if(req.url === "/about") {
      //BLOCKING
      for(let i=0;i<10;i++){
          for(let j=0;j<10; j++){
              console.log(`${j} ${i}`)
          }
      }
    res.end("About page");
  }else{
    res.end('Error page')
  }
  

})

server.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})