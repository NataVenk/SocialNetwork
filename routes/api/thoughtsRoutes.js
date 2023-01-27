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

// /api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

// /api/thoughts/thought:id
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)
  .post(addReaction);
  

  router
  .route('/:thoughtId/:reactionId')
  
  .delete(deleteReaction);

module.exports = router;