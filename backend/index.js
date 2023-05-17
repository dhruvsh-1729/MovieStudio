const http = require('http');
const PORT = 3000;
const hostname = 'localhost';

const server = http.createServer((req,res)=>{
    res.send('Hello nodejs');
    res.end();
})

server.listen(PORT, hostname, ()=>{
    console.log(
        `Server is listening at port ${PORT}`
    )
})