import IO from 'socket.io-client';
import stream from 'socket.io-stream';

var socket = IO();

socket.on('connected', function (socket) {
  console.log ('connected');
  socket.on('recieveNewMap', function () {

  })
})