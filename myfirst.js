import * as http from 'http';
import * as dt from './myfirstmodule.cjs';
import * as fs from 'fs';
import * as uc from 'upper-case';

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
