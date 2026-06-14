const http = require("node:http");
const fs = require("node:fs");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const stream = fs.createReadStream("./index.html");
      stream.pipe(res);
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const stream = fs.createReadStream("./about.html");
      stream.pipe(res);
    } else if (req.url === "/contact-me") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const stream = fs.createReadStream("./contact-me.html");
      stream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      const stream = fs.createReadStream("./404.html");
      stream.pipe(res);
    }
  })
  .listen(3000);
