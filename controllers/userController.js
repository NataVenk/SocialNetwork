const {Thought, User} = require ('../models');

module.exports = {

    // Get all users
    getUsers (req, res) {
        console.log ("hello")
        User.find().populate("thoughts")
        .then ((user) => res.json(user))
        .catch ((err) => res.status(500).json(err));
    },

    //Get Single User
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select ('-_v')
        .then ((user) =>
        !user
        ? res.status(404).json({message: "no user with that ID"})
        : res.json(user))
        .catch ((err) => res.status(500).json(err));
    },

    //create a user
    createUser (req, res) {
        User.create(req.body)
        .then ((user) => res.json(user))
        .catch((err) => {
            return res.status(500).json(err);
        });
    },

    // delete a user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json({ message: 'User is deleted!' }))
          .catch((err) => {res.status(500).json(err);
            })

      },
      updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    //   add a friend
      addFriend(req, res) {
        console.log ("adding friend")
        User.findOneAndUpdate(
            { _id: req.params.userId },
          { $push: { friends: req.params.friendId }},
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      
      deleteFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, {$pull: {friends: req.params.friendId}}, { runValidators: true, new: true })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json({ message: 'Friend is deleted!' }))
          .catch((err) => {res.status(500).json(err);
            })

      },
    };