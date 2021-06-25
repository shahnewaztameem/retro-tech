import express from 'express'
import {
  deletePost,
  getAllPosts,
  getPost,
} from '../controller/postController.js'
import { ensureTokenIsValid, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getAllPosts)
router
  .route('/:id')
  .get(getPost)
  .delete(ensureTokenIsValid, isAdmin, deletePost)

export default router
