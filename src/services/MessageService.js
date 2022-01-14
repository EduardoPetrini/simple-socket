const Message = require('../models/Messages');

module.exports.save = async (message) => {
  console.log(message);
  const newMessage = new Message({
    message,
    user: 'anonymous'
  });

  const result = await newMessage.save();
  if (message.includes('error')) {
    throw new Error('Error in message');
  }
  return result;
}