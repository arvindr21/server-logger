// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.json());


app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/logger', function(req, res,next) {
    console.log(req.body);
    // client.emit('message', req.body);
    io.emit('message', req.body);
});
server.listen(3000);
console.log('Logger server listening on port : 3000');