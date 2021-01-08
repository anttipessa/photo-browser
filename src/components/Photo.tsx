import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../state'


const PhotoList: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [{ photos }] = useStateValue()
  const currentPic = photos[id]

  if (!currentPic) return null
  return (
    <div className="photo">
      <img src={currentPic.url} />
      <div>Title: {currentPic.title}</div>
      <div>Id: {currentPic.id} </div>
      <div>Album id: {currentPic.albumId} </div>
    </div>
  )
}

export default PhotoList