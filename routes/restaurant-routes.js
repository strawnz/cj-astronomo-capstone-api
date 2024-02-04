const router = require('express').Router();
const restaurantController = require('../controllers/restaurants-controller');

router.route('/').get(restaurantController.restaurantsAll);
router.route('/by-venue/:restoId').get(restaurantController.restaurantsSingleByVenue);

module.exports = router;