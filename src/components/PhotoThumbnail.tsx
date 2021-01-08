import React from 'react'
import { Photo } from '../types'
import { Link } from 'react-router-dom'

const PhotoThumbnail: React.FC<{ photo: Photo }> = ({ photo }) => {

    if (!photo) return null
    return (
       <Link to={`/photos/${photo.id}`}>
       <img src={photo.thumbnailUrl}/>
       </Link> 
    )
}

export default PhotoThumbnail
