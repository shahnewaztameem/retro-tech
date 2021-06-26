import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

// @desc    Fetch All posts
// @route   GET /api/posts
// @access  Public
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
  if (posts) {
    res.json(posts)
  } else {
    res.status(404)
    throw new Error('No posts found!')
  }
})

// @desc    Fetch a single post
// @route   GET /api/posts/:id
// @access  Public
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id).populate('user', 'name')

  if (post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Delete single post
// @route   DELETE /api/posts/:id
// @access  Private/admin
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    await post.remove()
    res.json({ message: 'Post removed' })
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Create single post
// @route   POST /api/posts
// @access  Private/admin
const createPost = asyncHandler(async (req, res) => {
  const post = new Post({
    user: req.user._id,
    name: 'Sample post',
    image: '/images/sample.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda eum possimus, repellendus vero sint ipsa rem in vitae ullam.',
  })

  const createdPost = await post.save()
  res.status(201).json(createdPost)
})

// @desc    Update single post
// @route   PUT /api/posts/:id
// @access  Private/admin
const updatePost = asyncHandler(async (req, res) => {
  const { name, image, description } = req.body

  const post = await Post.findById(req.params.id)

  if (post) {
    post.name = name
    post.image = image
    post.description = description

    const updatedPost = await post.save()
    res.json(updatedPost)
  } else {
    res.status(404)
    throw new Error('Post not found!')
  }
})

export { getAllPosts, getPost, deletePost, createPost, updatePost }
