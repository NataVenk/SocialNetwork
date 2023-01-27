const { Thoughts, User, Reactions } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    console.log("getting all thoughts");
    Thoughts.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  //Get Single Thought
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select("-_v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "no thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  //create a thought
  createThought(req, res) {
    console.log("creating thought");
    Thoughts.create(req.body)
      .then((thought) =>
        // res.json(thought))
        {
          return User.findOneAndUpdate(
            { username: req.body.username },
            { $push: { thoughts: thought._id } },
            { runValidators: true, new: true }
          );
        }
      )
      .then((user) => res.status(200).json(user))
      .catch((err) => {
        return res.status(500).json(err);
      });
  },



  // delete a thought
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "thought is deleted!" })
      )
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  // Update a thought
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reaction: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "reaction added" })
      )
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    console.log("inside delete reaction")
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reaction: {reactionId:  req.params.reactionId} } },
      { runValidators: true, new: true }
    )
    

      .then((thought) =>
        {
          !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "reaction removed" })
        }
      )
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  
};
