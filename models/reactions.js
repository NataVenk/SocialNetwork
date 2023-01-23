const mongoose = require('mongoose');

const reactionSchema = new Schema({
    // Configure individual properties using Schema Types
    reactionId: { type: Number, required: true },
    reactionBody: { type: String, required: false, max_length: 280},
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
 
  });

  const Reaction = model('Reaction', reactionSchema);
  


  module.exports = Reaction;