const http =require('http')
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>hello word</h1>')
})

server.listen(3000,()=>{
    console.log('listing on 3000 port');
    
})