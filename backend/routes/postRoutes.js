import express from 'express'
import { getAllPosts, getPost } from '../controller/postController.js'

const router = express.Router()

router.route('/').get(getAllPosts)
router.route('/:id').get(getPost)

export default router
