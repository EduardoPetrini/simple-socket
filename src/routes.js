const { Router } = require('express');
const path = require('path');

const routes = Router();

routes.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(filePath);
});

module.exports = routes;