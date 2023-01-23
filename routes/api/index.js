const router = require('express').router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require ('./userRoutes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;