var http = require('express');

http.createServer(function(req, res){
    /*
    HTTP 헤더 전송
    HTTP status: 200 : OK
    Content Type: text/plain
    */
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // response body를 "Hello World"로 설정.
    res.end("Hello world\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");