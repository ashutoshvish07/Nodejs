
const http =require("http");

const server =http.createServer((req,res)=>{
    res.end("Hello world! ")
})
server.listen(8080,()=>{
    console.log("server is started on port no  ->  8080")
})