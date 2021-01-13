import axios from 'axios'
import { Photo } from '../types'
import { apiBaseUrl } from '../constants'

export const getPhotos = async (): Promise<Photo[] | undefined> => {
    const { data } = await axios.get<Photo[]>(`${apiBaseUrl}/photos`)
    return data
}