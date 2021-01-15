import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {

  return (
    <Menu mode="horizontal">
      <Menu.Item key="/"> <Link to="/">PhotoBrowser</Link></Menu.Item>
      <Menu.Item key="/photos">
        <Link to="/photos">Photos</Link>
      </Menu.Item>
      <Menu.Item key="/albums">
        <Link to="/albums">Albums</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users">Users</Link>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar