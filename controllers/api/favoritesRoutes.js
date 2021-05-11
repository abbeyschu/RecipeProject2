const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/auth');



// route to get all favorites
router.get('/', withAuth, async (req, res) => {
    const favoritesData = await Favorites.findAll().catch((err) => { 
        res.json(err);
      });
        const favorites = favoritesData.map((favorites) => favorites.get({ plain: true }));
        res.render('all', { favorites });
      });

// route to add a new favorite
router.post('/', withAuth, async (req, res) => {
    try {
      const newFavorites = await Favorites.create({
        user_id: req.session.user_id,
        label: req.body.label,
        idDrinkAPI: req.body.idDrinkAPI,
        foodurl: req.body.foodurl,
        comments: req.body.comments,
        image: req.body.image,
      });
  
      res.status(200).json(newFavorites);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//   route to update comments
  router.put('/:id', async (req, res) => {
    try {
      const commentData = await Favorites.update(
      {
        comments: req.body.comments,
      },
      {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
      };
  });

//   route to delete a favorite
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const favoritesData = await Favorites.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!favoritesData) {
        res.status(404).json({ message: 'No favorite recipe found with this id!' });
        return;
      }
  
      res.status(200).json(favoritesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;