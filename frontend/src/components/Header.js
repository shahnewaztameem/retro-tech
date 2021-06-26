import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      {/*userInfo ? (
        <div>
          <button className='btn btn-blue'>
            <Link to='/profile'>{userInfo.name}</Link>
          </button>
          <button className='btn btn-blue'>
            <Link to='/admin/posts'>All posts</Link>
          </button>

          <button className='btn btn-blue' onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <Link to='/login'>Login</Link>
      )*/}
      <header class='text-gray-400 bg-gray-900 body-font'>
        <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            to='/'
            class='flex title-font font-medium items-center text-white mb-4 md:mb-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              class='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span class='ml-3 text-xl'>Retro Blog</span>
          </Link>
          <nav class='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <Link to='/' class='mr-5 hover:text-white'>
              Home
            </Link>
            <Link to='/' class='mr-5 hover:text-white'>
              About Us
            </Link>
            <Link to='/' class='mr-5 hover:text-white'>
              Blog
            </Link>
          </nav>
          {userInfo ? (
            <div>
              <Link to='/profile'>
                <button class='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                  {userInfo.name}
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </button>
              </Link>

              <Link to='/admin/posts'>
                <button class='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                  All Posts
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </button>
              </Link>

              <button
                class='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
                onClick={logoutHandler}
              >
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
                Logout
              </button>
            </div>
          ) : (
            <Link to='/login'>
              <button class='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                Login
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
