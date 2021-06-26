import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from '../actions/postActions'
import Post from '../components/Post'
import Loader from '../components/Loader'
import Hero from '../components/Hero'
import Statistic from '../components/Statistic'
const HomePage = () => {
  const dispatch = useDispatch()
  const postList = useSelector((state) => state.postList)

  const { loading, posts, error } = postList

  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch])

  return (
    <>
      <Hero />
      {loading ? (
        <Loader />
      ) : (
        <section className='text-gray-600 bg-gray-900 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap -m-4'>
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Statistic />
    </>
  )
}

export default HomePage
