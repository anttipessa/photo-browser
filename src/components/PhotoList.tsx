import React from 'react'
import { Photo } from '../types'
import PhotoThumbnail from './PhotoThumbnail'
import { RootState } from 'src/redux/rootReducer'
import { useSelector } from 'react-redux'


const PhotoList: React.FC = () => {

  const { photos } = useSelector((state: RootState) => state.photos)

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