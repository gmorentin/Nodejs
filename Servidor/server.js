/*let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    let html = fs.readFileSync(__dirname + '/index.html','utf8');
    let message = 'Hello World...';
    html = html.replace('{Message}', message);
    res.end(html);
//console.log(__dirname);
}).listen(6553,'127.0.0.1');*/


let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'application/json'/*'text/html'*/});
    let obj={
        firstname: 'Gustavo',
        lastname: 'Morentin'
    };
    res.end(JSON.stringify(obj));
    //fs.createReadStream(__dirname + '/index.html').pipe(res); 
}).listen(6553,'127.0.0.1');