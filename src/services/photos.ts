import axios from 'axios'
import { Photo } from '../types'
import { apiBaseUrl } from '../constants'

export const getPhotos = async (): Promise<Photo[] | undefined> => {
    const { data } = await axios.get<Photo[]>(`${apiBaseUrl}/photos?_page=1&_limit=500`)
    return data
}