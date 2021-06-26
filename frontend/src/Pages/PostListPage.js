import React, { useEffect } from 'react'
import { listPosts, deletePost, createPost } from '../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { POST_CREATE_RESET } from '../constants/postConstants'

const PostListPage = ({ match, history }) => {
  const dispatch = useDispatch()
  const postList = useSelector((state) => state.postList)
  const { loading, error, posts } = postList

  const postDelete = useSelector((state) => state.postDelete)
  const {
    loading: loadingPostDelete,
    error: errorPostDelete,
    success,
  } = postDelete

  const postCreate = useSelector((state) => state.postCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    post: createdPost,
  } = postCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: POST_CREATE_RESET })

    if (!userInfo.isAdmin) {
      history.push('/login')
    }
    if (successCreate) {
      history.push(`/admin/post/${createdPost._id}/edit`)
    } else {
      dispatch(listPosts())
    }
  }, [dispatch, history, userInfo, success, successCreate, createdPost])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deletePost(id))
    }
  }

  const createPostHandler = () => {
    dispatch(createPost())
  }

  return (
    <>
      {/*loading ? (
        <Loader />
      ) : (
        <>
          {loadingPostDelete && <Loader />}
          {errorPostDelete && <p>{errorPostDelete}</p>}

          {loadingCreate && <Loader />}
          {errorCreate && <p>{errorCreate}</p>}
          <button onClick={createPostHandler}>Create a post</button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Decription</th>
              </tr>{' '}
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>
                    <Link to={`/post/${post._id}`}>{post.name}</Link>
                  </td>
                  <td>{post.description.substring(0, 50)}...</td>
                  <td>
                    <Link to={`/admin/post/${post._id}/edit`}>Edit Post</Link>
                    <button onClick={() => deleteHandler(post._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
              )*/}
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='flex justify-center items-center '>
            <button
              className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
              onClick={createPostHandler}
            >
              Create a post
            </button>
          </div>
          <table class='rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800'>
            <thead>
              <tr class='text-left border-b-2 border-gray-300'>
                <th class='px-4 py-3'>ID</th>
                <th class='px-4 py-3'>Title</th>
                <th class='px-4 py-3'>Description</th>
                <th class='px-4 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} class='bg-gray-100 border-b border-gray-200'>
                  <td class='px-4 py-3'>{post._id}</td>
                  <td class='px-4 py-3'>
                    <Link to={`/post/${post._id}`}>{post.name}</Link>
                  </td>
                  <td>{post.description.substring(0, 50)}...</td>
                  <td>
                    <Link to={`/admin/post/${post._id}/edit`}>
                      <button className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'>
                        Edit post
                      </button>
                    </Link>
                    <button
                      className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
                      onClick={() => deleteHandler(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

export default PostListPage
