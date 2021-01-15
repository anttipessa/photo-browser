import React from 'react'
import { Photo } from '../types'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const PhotoThumbnail: React.FC<{ photo: Photo }> = ({ photo }) => {

  if (!photo) return null

  return (
    <Link to={`/photos/${photo.id}`}>
      <Card hoverable
        bordered
        style={{ width: 150, height: 150, display: 'inline-block', margin: 5}}
        cover={<img alt={photo.title} src={photo.thumbnailUrl} />}>
      </Card>
    </Link>
  )
}

export default PhotoThumbnail