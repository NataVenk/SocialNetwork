const { Schema, model } = require('mongoose');


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
      friends: [{ type: Schema.Types.ObjectId, ref: 'user'}],
      
        //   Array of _id values referencing the Thought model
      thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
   
    },
    {
      toJSON: {
        getters: true,
      },
    }
);

      userSchema.virtual('friendCount').get(function () {
        return this.friends.length;
      })
  
 
  const User = model('user', userSchema);
  
  module.exports = User;
  