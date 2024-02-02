const router = require('express').Router();
const parkingController = require('../controllers/parking-controller');

router.route('/').get(parkingController.parkingAll);
router.route('/by-venue').get(parkingController.parkingFromVenueId);

module.exports = router;