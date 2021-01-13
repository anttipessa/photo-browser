import React from 'react'
import { User } from '../types'
import { Link } from 'react-router-dom'

const UserThumbNail: React.FC<{ user: User }> = ({ user }) => {

  if (!user) return null

  return (
    <Link to={`/users/${user.id}`}>
      <p>{user.id}</p>
    </Link>
  )
}

export default UserThumbNail