import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from '../actions/postActions'

const HomePage = () => {
  const dispatch = useDispatch()
  const postList = useSelector((state) => state.postList)

  const { loading, posts, error } = postList

  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch])

  return (
    <div className='container mx-auto'>
      {posts.map((post) => {
        return (
          <li>
            {post.name} - {post.description} - <img src={post.image} alt='' />
          </li>
        )
      })}
    </div>
  )
}

export default HomePage
