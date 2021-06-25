import React, { useEffect } from 'react'
import { listPosts, deletePost } from '../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

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

  console.log(posts)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listPosts())
    } else {
      history.push('/')
    }
  }, [dispatch, history, userInfo, success])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deletePost(id))
    }
  }

  const createPostHandler = () => {}

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {loadingPostDelete && <Loader />}
          {errorPostDelete && <p>{errorPostDelete}</p>}
          <button onClick={createPostHandler}>Create a post</button>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Decription</th>
            </tr>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>
                    <Link to={`/post/${post._id}`}>{post.name}</Link>
                  </td>
                  <td>{post.description.substring(0, 50)}...</td>
                  <td>
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
