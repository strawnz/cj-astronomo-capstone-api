const router = require('express').Router();
const restoVenueController = require('../controllers/restos-venues-controller');

router.route('/').get(restoVenueController.restosVenuesAll);
router.route('/by-venue').get(restoVenueController.restosFromVenueId);

module.exports = router;