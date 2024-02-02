const router = require('express').Router();
const restaurantController = require('../controllers/restaurants-controller');

router.route('/').get(restaurantController.restaurantsAll);

module.exports = router;