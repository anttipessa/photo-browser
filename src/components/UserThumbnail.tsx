import React from 'react'
import { User } from '../types'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const UserThumbNail: React.FC<{ user: User }> = ({ user }) => {



  if (!user) return null

  return (
    <Link to={`/users/${user.id}`}>
      <Card 
        hoverable
        bordered
        style={{ width: 350, height: 350, display: 'inline-flex', margin: 5, backgroundColor: "aquamarine", justifyContent: "center", alignItems:"center" }}
        bodyStyle={{display: 'inline-block'}}>
        {user.name}
      </Card>
    </Link>
  )
}

export default UserThumbNail