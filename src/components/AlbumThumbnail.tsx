import React from 'react'
import { Album } from '../types'
import { Link } from 'react-router-dom'

const AlbumThumbnail: React.FC<{ album: Album }> = ({ album }) => {

    if (!album) return null
    return (
       <Link to={`/albums/${album.id}`}>
       <p>{album.id}</p> 
       </Link> 
    )
}

export default AlbumThumbnail
