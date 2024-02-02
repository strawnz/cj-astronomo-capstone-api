const router = require('express').Router();
const restoVenueController = require('../controllers/restos-venues-controller');

router.route('/').get(restoVenueController.restosVenuesAll);

module.exports = router;