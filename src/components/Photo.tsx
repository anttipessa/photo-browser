import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useStateValue } from '../state'


const PhotoList: React.FC = () => {

  const { id } = useParams<{ id: string }>()
  const [{ photos }] = useStateValue()
  const currentPic = photos[id]
  const previous = photos[Number(id) - 1]
  const next = photos[Number(id) + 2]

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