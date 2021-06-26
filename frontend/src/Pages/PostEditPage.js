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
    <div className='container mx-auto'>
      {loading && <Loader />}
      <h1>Edit post</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor=''>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />

        <label htmlFor=''>Image:</label>
        <input
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder='enter custom image url'
          className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
        <label htmlFor=''>Choose an image</label>
        <input
          type='file'
          custom
          onChange={uploadFileHandler}
          className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
        {uploading && <Loader />}
        <label htmlFor=''>Description:</label>
        <textarea
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
        />
        <button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
          {' '}
          Update Post
        </button>
      </form>
    </div>
  )
}

export default PostEditPage
