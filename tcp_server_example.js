'use strict';

var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {

  socket.on('data', function(data) {

    fs.writeFile(__dirname + '/logs/' + Date.now().toString(), data.toString(), function(err) {
      if(err) { throw err; }
      else {
        socket.write('request logged\n');
        socket.end();
      }
    });
  });

  socket.on('end', function() {
    console.log('disconnected');
  });

  socket.on('error', function(err) {
    console.log(err);
    socket.end();
  });
});

server.listen(3000);
