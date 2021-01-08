/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import { getPhotos } from '../services/photos'
import { Photo } from '../types'

export const usePhotos = (): Photo[] =>  {
  const [photos, setPhotos] = useState([] as Photo[])
  React.useEffect(() => {
    const fetchProducts = async () => {
      const data = await getPhotos()
      setPhotos(data)
    }
    void fetchProducts()
  }, [photos])
 
  return photos
}