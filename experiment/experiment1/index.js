const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
   const method = req.method;
   const url = req.url;
  const date= new Date().toISOString();
  const log = `new log - ${date} | methd=${method} | url = ${url}\n`
  fs.appendFile("./log.txt", log, (err) => {
        if (err){
            res.writeHead(500)
            res.end();

        }
        else{
            res.writeHead(200,"done");
            res.end();
        }
    });
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
