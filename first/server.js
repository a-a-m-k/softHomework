var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var  url= req.url;
  
    if(url=="/"){
       res.write('Hi ');
    }
    else{
   res.write("adress: "+ url);}
   res.write('Hi ');
   

   res.end();
}).listen(8080);