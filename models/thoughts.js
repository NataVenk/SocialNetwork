const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
      thoughtText: { type: String, required: true, max_length: 280},
      createdAt: { type: Date, default: Date.now },
      username: {type: String,required: true},
      reaction:  [{ type: Schema.Types.ObjectId, ref: 'reaction' }],
       
    },

    
    {
      toJSON: {
        getters: true,
      },

    }
  );
  // Create a virtual called reactionCount that retrieves the length of the thought's react
  postSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
  });
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;
  