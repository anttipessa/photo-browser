import React from 'react'
import { Album } from '../types'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { PictureOutlined } from '@ant-design/icons'


const AlbumThumbnail: React.FC<{ album: Album }> = ({ album }) => {

  if (!album) return null

  return (
    <Link to={`/albums/${album.id}`}>
      <Card
        hoverable
        style={{ width: 150, height: 150, display: 'inline-flex', margin: 5, backgroundColor: "aquamarine", justifyContent: "center", alignItems: "center" }}
      >
        <PictureOutlined style={{ fontSize: '50px' }} />
        <br />
        Album {album.id}
      </Card>
    </Link>
  )
}

export default AlbumThumbnail
