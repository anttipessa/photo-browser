import React, { Suspense } from 'react'
import { Photo } from '../../types'
import { RootState } from '../../redux/rootReducer'
import { useSelector } from 'react-redux'
import './PhotoList.css'
import Loading from '../Loading'

const PhotoList: React.FC = () => {

  const { photos } = useSelector((state: RootState) => state.photos)
  const PhotoThumbnail = React.lazy(() => import('../PhotoThumbnail'))

  if (!photos) return null

  return (
    <div className="photo-list">
      <Suspense fallback={<Loading />}>
        {photos.map((photo: Photo) => (
          <PhotoThumbnail key={photo.id} photo={photo} />
        ))}
      </Suspense>
    </div>
  )
}

export default PhotoList