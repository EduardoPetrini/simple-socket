const { Server } = require('socket.io');
const http = require('http');

const MessageService = require('./services/MessageService');

let activeSocket;

module.exports.start = (app) => {
  const server = http.createServer(app);
  const io = new Server(server);

  io.on('connection', connected);
  return server;
};

const connected = (socket) => {
  activeSocket = socket;
  console.log('Socket Connected')
  socket.on('disconnect', disconnected);
  socket.on('chat message', message);
};

const disconnected = (socket) => {
  console.log('Socket Disconnected')
};

const message = async (msg) => {
  try {
    const response = await MessageService.save(msg);
    emitNewMessage(response);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err);
    emitErrorMessage(err);
  }
};

const emitNewMessage = (message) => {
  activeSocket.emit('new message', message);
}

const emitErrorMessage = (err) => {
  activeSocket.emit('error message', { message: err.message, createdAt: new Date() });
}