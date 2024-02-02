const router = require('express').Router();
const parkingController = require('../controllers/parking-controller');

router.route('/').get(parkingController.parkingAll);

module.exports = router;