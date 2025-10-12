// import http from "http";
import app from "./src/app.js";

/*
const routes = {
    '/': 'hello world',
    '/secret': 'u found a secret!'
}
    
 const server = http.createServer((req, res) => {
     res.writeHead(200, {"Content-type" : "Text/plain"});

     res.end(routes[req.url])
 });

*/
const PORT = 3000;

const HOST = () => {
    console.log(`server listening in port ${PORT}`);
}

app.listen(PORT, HOST)