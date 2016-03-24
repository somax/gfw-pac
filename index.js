/*
提供pac文件，根据ip动态修改 proxy
*/
var http = require('http');
var fs = require('fs');
var ip = require('ip');
var file = fs.readFileSync('./gfwlist.js');
var serverIp = ip.address(); 

var server = http.createServer(function(req,res){
	res.write('var proxy = "SOCKS5 ' + serverIp + ':1080; SOCKS ' + serverIp + ':1080; DIRECT;";\n');
	res.write(file.toString());
	res.end('');
});

server.listen(8080);
