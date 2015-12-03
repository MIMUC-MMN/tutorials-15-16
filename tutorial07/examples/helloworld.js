/**
 * Created by tobias on 27.11.2015.
 */
var http = require('http');
const port = 8976;
const host = '127.0.0.1';

const server = http.createServer(function(request,response){
    // define what content the client will receive. here plain text.
    // the single-quotes around Content-Type are necessary
    // because the property contains a dash (-).
    response.writeHead(200, {'Content-Type' : 'text-plain'});

    // actually write the response.
    // ".end" means: the end of the response
    response.end('Hello World\n');
});

server.listen(port,host);
console.log('Server running at http://'+host+':'+port);
