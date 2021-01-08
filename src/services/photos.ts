import axios from 'axios'
import { Photo } from '../types'

const apiBaseUrl = 'https://jsonplaceholder.typicode.com'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPhotos = async (): Promise<any> => {
  try {
    const { data } = await axios.get<Photo[]>(`${apiBaseUrl}/photos?_page=1&_limit=20`)
    return data
  } catch (e) {
    console.error(e)
  }
}