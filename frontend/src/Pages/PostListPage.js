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
      {loading ? (
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
      )}
    </>
  )
}

export default PostListPage
