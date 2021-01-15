import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Card, Descriptions } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RootState } from '../../redux/rootReducer'
import './User.css'

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
      <Card hoverable >
        <Descriptions title="User Profile" bordered size="middle">
          <Descriptions.Item label="Name">{currentUser.name}</Descriptions.Item>
          <Descriptions.Item label="Username">{currentUser.username}</Descriptions.Item>
          <Descriptions.Item label="Telephone">{currentUser.phone}</Descriptions.Item>
          <Descriptions.Item label="Email"><a href={`mailto:${currentUser.email}`}>{currentUser.email}</a></Descriptions.Item>
          <Descriptions.Item label="Website"><a>{currentUser.website}</a></Descriptions.Item>
          <Descriptions.Item label="Company" > {currentUser.company.name}, {currentUser.company.catchPhrase}</Descriptions.Item>
          <Descriptions.Item label="Address" > {currentUser.address.street}, {currentUser.address.suite}, {currentUser.address.zipcode} {currentUser.address.city}</Descriptions.Item>
        </Descriptions>
      </Card>
      <div className="links">
        {previous && <Link to={`/users/${previous.id}`}> <LeftOutlined style={{ fontSize: '50px' }} /></Link>}
        {next && <Link to={`/users/${next.id}`}><RightOutlined style={{ fontSize: '50px' }} /></Link>}
      </div>
    </div>
  )
}

export default User