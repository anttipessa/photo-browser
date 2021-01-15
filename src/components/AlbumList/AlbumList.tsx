import React from 'react'
import { Album } from '../../types'
import { RootState } from '../../redux/rootReducer'
import { useSelector } from 'react-redux'
import AlbumThumbnail from '../AlbumThumbnail'
import './AlbumList.css'

const AlbumList: React.FC = () => {

  const { albums } = useSelector((state: RootState) => state.albums)

  if (!albums) return null

  return (
    <div className="album-list">
      {albums.map((album: Album) => (
        <AlbumThumbnail key={album.id} album={album}/>
      ))}
    </div>
  )
}

export default AlbumList