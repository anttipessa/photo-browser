import { combineReducers } from '@reduxjs/toolkit'
import photosReducer from './photoSlice'
import albumsReducer from './albumSlice'


const rootReducer = combineReducers({
    photos: photosReducer,
    albums: albumsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer