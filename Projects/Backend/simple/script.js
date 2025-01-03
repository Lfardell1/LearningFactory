var http = require('http');


http.createServer(function (req,res){
    res.write("Hello, World!");
    res.end();
}).listen(8080, '0.0.0.0')

// Basic Implementation of a HTTP server in JS using Node 
// This server is simple in that it simply returns data when requested on

