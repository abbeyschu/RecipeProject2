const router = require('express').Router();
const { Favorites, Users } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    res.render('results');
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

router.get('/results', async (req, res) => {
  res.render('results2');
});


// Use withAuth middleware to prevent access to route
router.get('/favorites', async (req, res) => {
  res.render('favorites');
});
    // try {
    //   // Find the logged in user based on the session ID
    //   const userData = await Users.findByPk(req.session.user_id, {
    //     attributes: { exclude: ['password'] },
    //     include: [{ model: Favorites }],
    //   });
  
    //   const user = userData.get({ plain: true });
  
      // res.render('favorites', {
      //   // ...user,
      //   // logged_in: true
      // });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/search');
      return;
    }
  
    res.render('login');
  });

module.exports = router