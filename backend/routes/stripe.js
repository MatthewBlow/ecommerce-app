const { makePayment } = require('../controllers/stripeController');

const router  = require('express').Router();

router.post('/payment', makePayment)

module.exports = router