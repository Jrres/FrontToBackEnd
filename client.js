let http = require("http")
let fs = require( "fs")

http = XMLHttpRequest()
fs.readFile("index.html",(err,data)=>{
    if(err) throw err
})
http.createServer((res,req)=>{
    console.log("server on 8080 port")

   
  }).listen(8080);
  console.log("server on 8080 port")