const express = require('express');

require('./databases/index');

const socket = require('./socket');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(express.static('public'))

const server = socket.start(app);

module.exports = { app, server };

