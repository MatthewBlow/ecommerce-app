const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/userController')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/authMiddleware')

const router = require('express').Router()

router.get("/", verifyTokenAndAdmin, getAllUsers)
router.put("/:id", verifyTokenAndAuthorization, updateUser)
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)
router.get("/find/:id", verifyTokenAndAdmin, getUser)

module.exports = router