const router = require('express').Router();
const venueController = require('../controllers/venues-controller');

router.route('/').get(venueController.venuesAll);
router.route('/name/:venueName').get(venueController.venueIdFromName);
router.route('/:venueId').get(venueController.venuesSingle);

module.exports = router;