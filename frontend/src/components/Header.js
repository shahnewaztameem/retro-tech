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
    <div>
      {userInfo ? (
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
      )}
    </div>
  )
}

export default Header
