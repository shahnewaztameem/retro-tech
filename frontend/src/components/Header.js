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
          <Link to='/profile'>{userInfo.name}</Link>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  )
}

export default Header
