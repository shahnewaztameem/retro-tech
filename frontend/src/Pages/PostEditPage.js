import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { listPostDetails, updatePost } from '../actions/postActions'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import { POST_UPDATE_RESET } from '../constants/postConstants'

const PostEditPage = ({ match, history }) => {
  const postId = match.params.id
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const postDetails = useSelector((state) => state.postDetails)
  const { loading, error, post } = postDetails

  const postUpdate = useSelector((state) => state.postUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = postUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: POST_UPDATE_RESET })
      history.push('/admin/posts')
    } else {
      if (!post.name || post._id !== postId) {
        dispatch(listPostDetails(postId))
      } else {
        setName(post.name)
        setImage(post.image)
        setDescription(post.description)
      }
    }
  }, [dispatch, postId, post, successUpdate, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updatePost({
        _id: postId,
        name,
        image,
        description,
      })
    )
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  return (
    <div>
      {loading && <Loader />}
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
          placeholder='enter custom image url'
        />
        <label htmlFor=''>Choose an image</label>
        <input type='file' custom onChange={uploadFileHandler} />
        {uploading && <Loader />}
        <label htmlFor=''>Description:</label>
        <textarea
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button> Update Post</button>
      </form>
    </div>
  )
}

export default PostEditPage
