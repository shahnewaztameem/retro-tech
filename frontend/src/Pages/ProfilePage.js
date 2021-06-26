import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProfilePage = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log(userInfo)
  return (
    <section class='text-gray-400 bg-gray-900 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-12'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            Logged in as {userInfo.name}
          </h1>
        </div>
        <div class='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4'>
          <div class='relative sm:mb-0 flex-grow w-full'>
            <label for='full-name' class='leading-7 text-sm text-gray-400'>
              Full Name
            </label>
            <input
              type='text'
              id='full-name'
              name='full-name'
              class='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              placeholder={userInfo.name}
              disabled
            />
          </div>
          <div class='relative sm:mb-0 flex-grow w-full'>
            <label for='email' class='leading-7 text-sm text-gray-400'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              class='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              placeholder={userInfo.email}
              disabled
            />
          </div>
          <button class='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Button
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
