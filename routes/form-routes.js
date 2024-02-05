const router = require('express').Router();
const formController = require('../controllers/forms-controller');

router.route('/').get(formController.formsAll);
router.route('/').post(formController.addForm);
router.route('/last-updated').get(formController.lastUpdatedForm);
router.route('/:formId').get(formController.storedForm);
router.route('/:formId').put(formController.updateForm);

module.exports = router;