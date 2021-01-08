import React from 'react'
import './App.css'
import PhotoThumbnail from './components/PhotoThumbnail'
import { Photo } from './types'
import { usePhotos } from './hooks'
import { useStateValue } from './state'

const App: React.FC = () => {

  usePhotos()
  const [{ photos }] = useStateValue()

  console.log(photos)
  if (!photos) return null

  return (
    <div className="App">
      {Object.values(photos).map((photo: Photo) => (
        <PhotoThumbnail key={photo.id} photo={photo} />
      ))}
    </div>
  )
}

export default App
