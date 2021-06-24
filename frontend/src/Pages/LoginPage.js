import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, userInfo, error } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    //already loggedin then do not show login
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <>
      {error && <div>{error}</div>}
      <div class='container mx-auto'>
        <div class='flex justify-center content-center px-6 my-12'>
          <div class='w-full xl:w-3/4 lg:w-11/12 flex'>
            <div
              class='w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg'
              style={{
                backgroundImage: `url(
                  'https://source.unsplash.com/K4mSJ7kc0As/600x800'
                )`,
              }}
            ></div>

            <div class='w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none'>
              <h3 class='pt-4 text-2xl text-center'>Welcome Back!</h3>
              <form
                class='px-8 pt-6 pb-8 mb-4 bg-white rounded'
                onSubmit={submitHandler}
              >
                <div class='mb-4'>
                  <label class='block mb-2 text-sm font-bold text-gray-700'>
                    Email
                  </label>
                  <input
                    class='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='username'
                    type='email'
                    placeholder='Username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class='mb-4'>
                  <label class='block mb-2 text-sm font-bold text-gray-700'>
                    Password
                  </label>
                  <input
                    class='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class='mb-6 text-center'>
                  <button
                    class='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Sign In
                  </button>
                </div>
                <hr class='mb-6 border-t' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
