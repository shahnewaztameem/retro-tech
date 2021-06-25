import express from 'express'
import { authUser, getUserProfile } from '../controller/userController.js'
import { ensureTokenIsValid, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/login').post(authUser)
router.route('/profile').get(ensureTokenIsValid, isAdmin, getUserProfile)
export default router
