const { Schema, Types} = require('mongoose');

const reactionSchema = new Schema({
    // Configure individual properties using Schema Types
    reactionId: { type: Schema.Types.ObjectId, default:()=>new Types.ObjectId(), required: true },
    reactionBody: { type: String, required: false, max_length: 280},
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
 
  });


  module.exports = reactionSchema;