const router = require('express').Router();
const formController = require('../controllers/forms-controller');

router.route('/').get(formController.formsAll);
router.route('/').post(formController.addForm);

module.exports = router;