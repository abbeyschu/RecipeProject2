const router = require('express').Router();


router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/search', async (req, res) => {
    res.render('results');
});

router.get('/favorites', async (req, res) => {
    res.render('favorites');
});

module.exports = router