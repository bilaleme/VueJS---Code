var express = require('express');
var http = require('http');
var reload = require('reload');

var app = express();

var server = http.createServer(app);

reload(app);

server.listen(8000,function(){console.log('Webserver listening at 8000 port');});