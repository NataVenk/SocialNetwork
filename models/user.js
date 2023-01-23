const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        max_length: 50,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
      },
      friends: {
        type: String,
        unique: true,
        required: true,
        // Array of _id values referencing the User model (self-reference)
       
      },

      thoughts: {
        type: String,
        required: true,
        max_length: 50,
      },
      thoughts: [thoughtSchema],
    //   Array of _id values referencing the Thought model
    },
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    {
      toJSON: {
        getters: true,
      },
    }
);

      postSchema.virtual('friendCount').get(function () {
        return this.freinds.length;
      })
    //   postSchema.virtual('commentCount').get(function () {
    //     return this.comments.length;
 
  const User = model('user', userSchema);
  
  module.exports = User;
  