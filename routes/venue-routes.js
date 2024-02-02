const router = require('express').Router();
const venueController = require('../controllers/venues-controller');

router.route('/').get(venueController.venuesAll);
router.route('/:venueName').get(venueController.venueIdFromName);

module.exports = router;