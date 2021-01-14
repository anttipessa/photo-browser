import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import { PageHeader } from 'antd'


const NavBar: React.FC = () => {

  return (
    <AppBar position="static" >
      <Tabs aria-label="simple tab">
      <PageHeader>PhotoBrowser</PageHeader>
        <Tab label="Photos" component={Link} to="/" />
        <Tab label="Albums" component={Link} to="/albums" />
        <Tab label="Users" component={Link} to="/users" />
      </Tabs>
    </AppBar>
  )
}

export default NavBar