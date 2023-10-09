const express = require ("express");
const router = express.Router();
const {validateSignupRequest, isRequestValidated, validateSigninRequest } = require ("../validators/auth.js");

const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  verifyEmail,
}  = require ("../controllers/userController.js");
const { protect,  systemAdmin ,} = require ("../middleware/authMiddleware.js");

router.route('/').post(validateSignupRequest,registerUser, isRequestValidated).get(protect, systemAdmin, getUsers)
// router.post('/login',validateSigninRequest, isRequestValidated, authUser)
router.post('/login', authUser)
router.post('/verify-email',verifyEmail)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect,updateUserProfile)
router
  .route('/:id')
  .delete(protect, systemAdmin, deleteUser)
  .get(protect, systemAdmin, getUserById)
  .put(protect, systemAdmin, updateUser)

  module.exports = router;
