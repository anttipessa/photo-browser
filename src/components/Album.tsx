import { PageHeader } from 'antd'
import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RootState } from '../redux/rootReducer'
import { Photo } from '../types'
import PhotoThumbnail from './PhotoThumbnail'

const Album: React.FC = () => {

  const { photos, albums, users } = useSelector((state: RootState) => {
    return {
      photos: state.photos.photos,
      albums: state.albums.albums,
      users: state.users.users
    }
  },
  shallowEqual
  )

  const { id } = useParams<{ id: string }>()

  const currentId = Number(id)
  const albumPhotos = photos.filter(({ albumId }) => albumId === currentId)
  const currentAlbum = albums.find(({ id }) => id === currentId)
  const previous = albums.find(({ id }) => id === currentId - 1)
  const next = albums.find(({ id }) => id === currentId + 1)
  const currentUser = users.find(({ id }) => id === currentAlbum?.userId)

  if (!currentAlbum) return null

  return (
    <div className="album">
      <PageHeader><b> Album {id}</b></PageHeader>
      {currentUser && <Link to={`/users/${currentUser.id}`}>Made by {currentUser.name}</Link>}
      <div className="links">
        {previous && <Link to={`/albums/${previous.id}`}>Previous </Link>}
        {next && <Link to={`/albums/${next.id}`}>Next</Link>}
      </div>
      {albumPhotos.map((photo: Photo) => (
        <PhotoThumbnail key={photo.id} photo={photo}
        />
      ))}
    </div>
  )
}

export default Album