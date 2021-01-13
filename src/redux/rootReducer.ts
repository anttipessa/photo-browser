import { combineReducers } from '@reduxjs/toolkit'
import photosReducer from './photoSlice'
import albumsReducer from './albumSlice'
import usersReducer from './userSlice'


const rootReducer = combineReducers({
    photos: photosReducer,
    albums: albumsReducer,
    users: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer