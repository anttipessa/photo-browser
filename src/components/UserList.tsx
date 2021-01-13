import React from 'react'
import { User } from '../types'
import { RootState } from 'src/redux/rootReducer'
import { useSelector } from 'react-redux'
import UserThumbNail from './UserThumbnail'

const AlbumList: React.FC = () => {

  const { users } = useSelector((state: RootState) => state.users)

  if (!users) return null

  return (
    <div className="photo-list">
      {users.map((user: User) => (
        <UserThumbNail key={user.id} user={user} />
      ))}
    </div>
  )
}

export default AlbumList