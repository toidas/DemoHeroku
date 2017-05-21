var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer( function (request, response) {  
   
    var body = '';
    request.on('data', function(data){
        console.log('Received Data');
        body += data;
    });
    request.on('end', function() {
        // Emit the data to all clients
        console.log(body.toString())
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello "+body+"\n"); // You Can Call Response.write Infinite Times BEFORE response.end
        response.write("I am server")
        response.end("\n");
        console.log('End Data');
    });
     
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');