/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { getPhotos } from '../services/photos'
import { setPhotoList, useStateValue } from '../state'

export const usePhotos = () =>  {
  const [, dispatch] = useStateValue()
  React.useEffect(() => {
    const fetchProducts = async () => {
      console.log("fetching")
      const data = await getPhotos()
      dispatch(setPhotoList(data))
    }
    void fetchProducts()
  }, [dispatch])
}