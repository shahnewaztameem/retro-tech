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
        // <div>
        //   <Link to='/'>Back</Link>
        //   <img src={post.image} alt='' />
        //   {post.user?.name}
        //   <h1>{post.title}</h1>
        //   <p>{post.description}</p>
        // </div>
        <section class='text-gray-400 bg-gray-900 body-font'>
          <div class='container px-5 py-24 mx-auto flex flex-col'>
            <div class='lg:w-4/6 mx-auto'>
              <div class='rounded-lg h-64 overflow-hidden'>
                <img
                  alt='content'
                  class='object-cover object-center h-full w-full'
                  src={post.image}
                  alt={post.name}
                />
              </div>
              <div class='flex flex-col sm:flex-row mt-10'>
                <div class='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                  <div class='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-10 h-10'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <div class='flex flex-col items-center text-center justify-center'>
                    <h2 class='font-medium title-font mt-4 text-white text-lg'>
                      {post.user?.name}
                    </h2>
                    <div class='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                    <p class='text-base text-gray-400'>
                      Admin About will go here
                    </p>
                  </div>
                </div>
                <div class='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                  <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
                    {post.name}
                  </h1>
                  <p class='leading-relaxed text-lg mb-4'>{post.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default PostPage
