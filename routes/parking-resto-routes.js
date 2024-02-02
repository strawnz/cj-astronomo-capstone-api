const router = require('express').Router();
const parkingRestoController = require('../controllers/parking-restos-controller');

router.route('/').get(parkingRestoController.parkingRestosAll);

module.exports = router;