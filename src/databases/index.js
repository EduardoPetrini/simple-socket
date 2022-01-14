const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI.replace('<password>', process.env.DB_PASS);

mongoose.connect(DB_URI).then(() => {
  console.log('Database is connected');
});