var http = require("http");
var fs = require('fs');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  // response.write("<!DOCTYPE html>");
  // response.write("<html>");
  // response.write("<head>");
  // response.write("<title>Hello World Page</title>");
  // response.write("</head>");
  // response.write("<body>");
  // response.write("Hello World!");
  // response.write("</body>");
  // response.write("</html>");

   var file = fs.createReadStream('index.html');
   file.pipe(response);
  
   //response.end();
});

server.listen(3000);
console.log("Server is listening");