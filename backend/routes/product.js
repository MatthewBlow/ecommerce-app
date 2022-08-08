const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../controllers/productController');
const { verifyTokenAndAdmin } = require('../middleware/authMiddleware');

const router = require('express').Router();

router.get('/', getAllProducts)
router.get('/find/:id', getProduct)
router.post('/add', verifyTokenAndAdmin, createProduct)
router.put('/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)


module.exports = router 