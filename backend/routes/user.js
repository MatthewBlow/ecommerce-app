const { updateUser, deleteUser, getUser, getAllUsers, getUserStats } = require('../controllers/userController')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/authMiddleware')

const router = require('express').Router()

router.get("/", verifyTokenAndAdmin, getAllUsers)
router.put("/:id", verifyTokenAndAuthorization, updateUser)
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)
router.get("/find/:id", verifyTokenAndAdmin, getUser)
router.get("/stats", verifyTokenAndAdmin, getUserStats )

module.exports = router