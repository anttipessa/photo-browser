/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPhotos } from 'src/services/photos'
import { Photo } from 'src/types'
import { AppThunk } from './store'


interface PhotoState {
  photos: Photo[]
  isLoading: boolean
  error: string | null
}

const photosInitialState: PhotoState = {
  photos: [],
  isLoading: false,
  error: null
}

function startLoading(state: PhotoState) {
  state.isLoading = true
}

function loadingFailed(state: PhotoState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const photos = createSlice({
  name: 'photos',
  initialState: photosInitialState,
  reducers: {
    getPhotosStart: startLoading,
    getPhotosSuccess(state, { payload }: PayloadAction<Photo[]>) {
      state.photos = payload
      state.isLoading = false
      state.error = null
    },
    getPhotosFailure: loadingFailed
  }
})

export const {
  getPhotosStart,
  getPhotosSuccess,
  getPhotosFailure
} = photos.actions

export default photos.reducer

export const fetchPhotos = (): AppThunk => async dispatch => {
  try {
    dispatch(getPhotosStart())
    const photos = await getPhotos()
    if (photos) {
      dispatch(getPhotosSuccess(photos))
    }
  } catch (err) {
    dispatch(getPhotosFailure(err.toString()))
  }
}

