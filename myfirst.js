var http = require('http');
var dt = require('./myfirstmodule.js');
var fs = require('fs');

(async () => {
    uc = await import('upper-case');

    http.createServer(function (req, res) {
        fs.readFile('demofile1.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<html>date: ${dt.myDateTime()}`)
            res.write(uc.upperCase("Hello World!"));
            res.write(data);
            res.end('Hello World!</html>');
        })
    }).listen(8080);

    console.log("einde programma aangepast")
})();