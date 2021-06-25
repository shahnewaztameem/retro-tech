import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProfilePage = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log(userInfo)
  return (
    <div>
      <Link to='/'>Go Back</Link>
      {userInfo.name} - {userInfo.email}
    </div>
  )
}

export default ProfilePage
