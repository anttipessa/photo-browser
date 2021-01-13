import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RootState } from 'src/redux/rootReducer'

const User: React.FC = () => {

  const { users } = useSelector((state: RootState) => state.users)
  const { id } = useParams<{ id: string }>()
  
  const currentId = Number(id)
  const currentUser = users.find(({ id }) => id === currentId)
  const previous = users.find(({ id }) => id === currentId - 1)
  const next = users.find(({ id }) => id === currentId + 1)

  if (!currentUser) return null

  return (
    <div className="user">
      <h4>User Profile</h4>
      <div className="links">
        {previous && <Link to={`/users/${previous.id}`}>Previous</Link>}
        {next && <Link to={`/users/${next.id}`}>Next</Link>}
      </div>
      <p>{currentUser.name}</p>
    </div>
  )
}

export default User