import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listPostDetails } from '../actions/postActions'
import Loader from '../components/Loader'
const PostPage = ({ match }) => {
  const dispatch = useDispatch()

  const postDetails = useSelector((state) => state.postDetails)

  const { loading, post, error } = postDetails

  useEffect(() => {
    dispatch(listPostDetails(match.params.id))
  }, [dispatch, match])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Link to='/'>Back</Link>
          <img src={post.image} alt='' />
          by {post.user.name}
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      )}
    </>
  )
}

export default PostPage
