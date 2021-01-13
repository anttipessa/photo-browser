import axios from 'axios'
import { User } from '../types'
import { apiBaseUrl } from '../constants'

export const getUsers = async (): Promise<User[] | undefined> => {
    const { data } = await axios.get<User[]>(`${apiBaseUrl}/users`)
    return data
}