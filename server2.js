var http = require('http')
var A = 1
var B = 1
var C = A + B
var msg
if(C==30){
    msg = "Sum is 30"
}else{
    msg = "Sum is not 30"
}

http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("A Value is "+ B)
    res.write("<br/>B Value is "+ B)
    res.write(`<br/>Sum  is ${A+B}`)
    res.end("<br/>" + msg + "Done")

}).listen(4000)

console.log("Server is Started on http://127.0.0.1:4000")