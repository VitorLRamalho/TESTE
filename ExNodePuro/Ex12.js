//Servidor http!!!

var http = require('http');

if (http.createServer(function (req, res) {
    res.end("Hello World!");

}).listen(8081)) {

    console.log("O Servidor está ONLINE!")
} else {

    console.log("O servidor está OFFLINE!")
}
