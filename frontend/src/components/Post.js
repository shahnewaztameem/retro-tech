import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className='p-4 md:w-1/3 text-white'>
      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <Link to={`/post/${post._id}`}>
          <img
            className='lg:h-48 md:h-36 w-full object-cover object-center'
            src={post.image}
            alt='blog'
          />
        </Link>
        <div className='p-6'>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            {post.title}
          </h1>
          <p className='leading-relaxed mb-3'>
            {post.description.substring(0, 100)}.....
          </p>
          <div className='flex items-center flex-wrap '>
            <Link
              className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
              to={`/post/${post._id}`}
            >
              Learn More
              <svg
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5 12h14'></path>
                <path d='M12 5l7 7-7 7'></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
