import React from 'react'
import { User } from '../../types'
import { RootState } from '../../redux/rootReducer'
import { useSelector } from 'react-redux'
import UserThumbNail from '../UserThumbnail'
import './UserList.css'

const UserList: React.FC = () => {

  const { users } = useSelector((state: RootState) => state.users)

  if (!users) return null

  return (
    <div className="user-list">
      {users.map((user: User) => (
        <UserThumbNail key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList