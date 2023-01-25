const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require ('./usersRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;