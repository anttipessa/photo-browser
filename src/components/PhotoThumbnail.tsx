import React from 'react'
import { Photo } from '../types'

const PhotoThumbnail: React.FC<{ photo: Photo }> = ({ photo }) => {

    if (!photo) return null
    return (
        <img src={photo.thumbnailUrl} />
    )
}

export default PhotoThumbnail
