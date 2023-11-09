const http = require('http');  
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    let path = __dirname + '/public/index.html';
    console.log(req.url);

    switch(req.url) {
        case '/aboutus': 
            path = __dirname + '/public/aboutus.html';
            break;

        case '/contactus':
            path = __dirname + '/public/contactus.html';
            break;
        default:
            path = __dirname + '/public/index.html';
            break;
    }

    fs.readFile(path, (err, data) => {     
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data, 'utf-8');
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
} );