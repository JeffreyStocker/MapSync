const express = require ('express');
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;

const app = express();

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  res.send('test').status(200);
});


const server = http.Server(app);

server.listen(port, () => {
  console.log('Server Listening on port:', port)
});

const socket = socketIo(server).listen(server);

socket.on('connection', function (socket) {
  console.log ('connected');
})

