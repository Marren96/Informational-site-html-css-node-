var http = require('htpp')
const fs = require('fs')
const server = htpp. createServer(function(req,res){
    res.setHeader('content-Type' , 'text/html');
    let path = './Node Project'

    switch(req.url){
        case'/':
            path += 'index.html'
            res.statuscode = 200;
            break;
        case 'about.html':
            path += 'about.html';
            res.statuscode = 200;
            break;
        case 'contact-me.html':
            path += 'contact-me.html'
            res.statuscode = 200;
            break;
        default :
            path += '404.html'
            res.statuscode = 400;
    }

}).listen(8080)