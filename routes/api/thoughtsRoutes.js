const router = require('express').Router();

const{
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,

 } = require ('../../controllers/thoughtController')

// /api/thought
router.route('/')
.get(getThoughts)
.post(createThought);

// /api/thought/thought:id
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;