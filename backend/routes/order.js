const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrders, monthlyIncome} = require('../controllers/orderController');
const { verifyTokenAndAdmin, 
        verifyTokenAndAuthorization, 
        verifyToken } = require('../middleware/authMiddleware');

const router = require('express').Router();

router.get('/', verifyTokenAndAdmin, getAllOrders)
router.post('/', verifyToken, createOrder)
router.get('/find/:id', verifyTokenAndAuthorization, getOrder)
router.put('/:id', verifyTokenAndAdmin, updateOrder)
router.delete('/:id', verifyTokenAndAdmin, deleteOrder)
router.get('/income', verifyTokenAndAdmin, monthlyIncome)

module.exports = router