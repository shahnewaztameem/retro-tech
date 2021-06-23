import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

// @desc    Fetch All posts
// @route   GET /api/posts
//@access   Public
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
  if (posts) {
    res.json(posts)
  } else {
    res.status(404).json({ message: 'No posts found!' })
  }
})

// @desc    Fetch a single post
// @route   GET /api/posts/:id
//@access   Public
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ message: 'Post not found!' })
  }
})
export { getAllPosts, getPost }
