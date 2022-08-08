const { createCart, updateCart, deleteCart, getCart, getAllCarts } = require('../controllers/cartController');
const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middleware/authMiddleware');

const router = require('express').Router();

router.get('/', verifyTokenAndAdmin, getAllCarts)
router.post('/', verifyToken, createCart)
router.put('/:id', verifyTokenAndAuthorization, updateCart)
router.delete('/:id', verifyTokenAndAdmin, deleteCart)
router.get('/find/:userId', verifyTokenAndAuthorization, getCart)

module.exports = router