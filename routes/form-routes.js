const router = require('express').Router();
const formController = require('../controllers/forms-controller');

router.route('/').get(formController.formsAll);
router.route('/').post(formController.addForm);
router.route('/parking').post(formController.chooseParking);

module.exports = router;