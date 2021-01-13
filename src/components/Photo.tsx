import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { RootState } from 'src/redux/rootReducer'

const PhotoList: React.FC = () => {

  const { photos } = useSelector((state: RootState) => state.photos)

  const { id } = useParams<{ id: string }>()
  const currentId = Number(id)

  const currentPic = photos.find(({ id }) => id === currentId)
  const previous = photos.find(({ id }) => id === currentId - 1)
  const next = photos.find(({ id }) => id === currentId + 1)

  if (!currentPic) return null

  return (
    <div className="photo">      
      <img src={currentPic.url} />
      <div>Title: {currentPic.title}</div>
      <div>Id: {currentPic.id} </div>
      <div>Album id: {currentPic.albumId} </div>
      <div className="links">
      {previous && <Link to={`/photos/${previous.id}`}>Previous</Link>}
      {next && <Link to={`/photos/${next.id}`}>Next</Link>}
    </div>
    </div>
  )
}

export default PhotoList