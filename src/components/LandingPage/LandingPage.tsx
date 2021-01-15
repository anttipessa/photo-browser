import { PageHeader, Typography } from 'antd'
import React from 'react'
import PhotoGallery from '../../assets/gallery.jpg'
import './LandingPage.css'

const LandingPage: React.FC = () => {

  return (
    <div className="landing-page">
      <PageHeader title="PhotoBrowser" style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}> </PageHeader>
      <div className="image">
        <img width="1146" height="750" alt="Gallery" src={PhotoGallery}></img>
      </div>
      <Typography.Text>This is a website for viewing photos, albums and users from this <a href="https://jsonplaceholder.typicode.com/">api.</a> </Typography.Text>
    </div>
  )
}

export default LandingPage