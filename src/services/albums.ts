import axios from 'axios'
import { Album } from '../types'
import { apiBaseUrl } from '../constants'

export const getAlbums = async (): Promise<Album[] | undefined> => {
    const { data } = await axios.get<Album[]>(`${apiBaseUrl}/albums`)
    return data
}