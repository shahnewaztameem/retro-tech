import express from 'express'
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from '../controller/postController.js'
import { ensureTokenIsValid, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getAllPosts).post(ensureTokenIsValid, isAdmin, createPost)
router
  .route('/:id')
  .get(getPost)
  .put(ensureTokenIsValid, isAdmin, updatePost)
  .delete(ensureTokenIsValid, isAdmin, deletePost)

export default router
