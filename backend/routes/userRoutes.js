import express from 'express'
import { authUser, getUserProfile } from '../controller/userController.js'
import { ensureTokenIsValid } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/login').post(authUser)
router.route('/profile').get(ensureTokenIsValid, getUserProfile)
export default router
