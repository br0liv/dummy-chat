var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var path = require('path');

app.use(express.static('static'));

app.get('/', function( req, res){
    res.sendFile(path.join(__dirname + '/static/html/index.html'));
});

//Socket IO
io.on('connection', function(socket){

  //New socket connected
  console.log('INFO - A user connected to the server');

  //Socket disconnected
  socket.on('disconnect', function(){
    console.log('INFO - A user disconnected from the server');
  });


  //User joined the room
  socket.on('ADD_USER_TO_CHAT', function(user){

    let message = {
          from : user.username,
          content : user.username + ' joined the chat room',
          messageType : 'info'
    }
    socket.broadcast.emit( 'NEW_MESSAGE_FROM_CHAT', message );
  });

  //User sent a message
  socket.on('SEND_MESSAGE_TO_CHAT', function(messageData){
      socket.broadcast.emit( 'NEW_MESSAGE_FROM_CHAT', messageData.message );
  });

});

server.listen( 4000, function(){
    console.log( 'Your server is running. Point your browser to http://localhost:4000 to access the application' )
})