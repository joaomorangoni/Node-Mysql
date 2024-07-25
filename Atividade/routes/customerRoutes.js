const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.listCustomers);
router.get('/add', customerController.addCustomerForm);
router.post('/add', customerController.addCustomer);
router.get('/edit/:id', customerController.editCustomerForm);
router.post('/edit/:id', customerController.updateCustomer);
router.get('/delete/:id', customerController.deleteCustomer);

module.exports = router;