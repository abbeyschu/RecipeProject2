const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favoritesRoutes = require('./favoritesRoutes');

router.use('/users', userRoutes);
router.use('/favorites', favoritesRoutes);

module.exports = router;