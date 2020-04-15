const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.method == "GET") {

        var fileUrl;
        if (req.url == "/") {
            fileUrl = '/index.html';
        } else {
            fileUrl = req.url;
        }
        var filePath = path.resolve(`./public${fileUrl}`);
        var fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h3>Error 404  <a href="#">${filePath}</a> does not exists.</h3></body></html>`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h3>Error 404  <a href="#">${filePath}</a>  not a HTML file.</h3></body></html>`);
        }
    }
});

server.listen(port, hostname, (req, res) => {
    console.log(`server running at http://${hostname}:${port}`);
});