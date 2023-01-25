const router = require('express').Router();

const{
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,

 } = require ('../../controllers/userController')

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/thought/user:id
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)
  

  router
  .route('/:userId/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;