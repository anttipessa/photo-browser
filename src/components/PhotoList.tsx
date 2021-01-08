import React from 'react'
import { Photo } from '../types'
import PhotoThumbnail from './PhotoThumbnail'
import { useStateValue } from '../state'


const PhotoList: React.FC = () => {
  const [{ photos }] = useStateValue()
  if (!photos) return null
  return (
    <div className="photo-list">
      {Object.values(photos).map((photo: Photo) => (
        <PhotoThumbnail key={photo.id} photo={photo}
        />
      ))}
    </div>
  )
}

export default PhotoList