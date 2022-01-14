const { Schema, model } = require('mongoose');

const messagesSchema = new Schema({
  message: {
    type: String,
  },
  user: {
    type: String,
  },

},
  {
    timestamps: { createdAt: 'created_at' },
    collection: 'messages',
  }
);

const Message = model('Message', messagesSchema);

module.exports = Message;