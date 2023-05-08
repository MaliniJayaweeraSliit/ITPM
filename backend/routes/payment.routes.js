const router = require('express').Router();

const {
    addPayment,
    getPayments,
    deletePayment,
    getPayment, 
    updatePayment
  } = require('../controllers/payments.controller');

//add new payment
router.post('/addpayment', addPayment);

// get all payments
router.get('/getpayments',getPayments);

// delete specific payment
router.get('/deletepayment/:id', deletePayment);

// Search for payment
router.get('/search/:id',getPayment);

//Update Payment
router.post('/updatepayment/:id',updatePayment);

module.exports = router;