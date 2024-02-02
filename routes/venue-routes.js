const router = require('express').Router();
const venueController = require('../controllers/venues-controller');

router.route('/').get(venueController.venuesAll);

module.exports = router;