const Message = require('../models/Messages');

module.exports.save = (message) => {
  console.log(message);
  const newMessage = new Message({
    message,
    user: 'anonymous'
  });

  return newMessage.save();
}