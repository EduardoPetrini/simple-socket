const { Server } = require('socket.io');
const http = require('http');

const MessageService = require('./services/MessageService');

module.exports.start = (app) => {
  const server = http.createServer(app);
  const io = new Server(server);

  io.on('connection', connected);
  return server;
};

const connected = (socket) => {
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
    console.log(response);
  } catch (err) {
    console.log(`Error to persist message: ${err.message}`);
    console.log(err);
  }
};