import React, { useState, useEffect } from 'react'
import { listPostDetails } from '../actions/postActions'
import { useSelector, useDispatch } from 'react-redux'

const PostEditPage = ({ match, histor }) => {
  const postId = match.params.id
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const postDetails = useSelector((state) => state.postDetails)
  const { loading, error, post } = postDetails

  useEffect(() => {
    if (!post.name || post._id !== postId) {
      dispatch(listPostDetails(postId))
    } else {
      setName(post.name)
      setImage(post.image)
      setDescription(post.description)
    }
  }, [dispatch, postId, post])

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Edit post</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor=''>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor=''>Image:</label>
        <input
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor=''>Description:</label>
        <textarea
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </div>
  )
}

export default PostEditPage
