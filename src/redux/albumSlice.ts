/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAlbums } from '../services/albums'
import { Album } from '../types'
import { AppThunk } from './store'


interface AlbumState {
  albums: Album[]
  isLoading: boolean
  error: string | null
}

const albumsInitialState: AlbumState = {
  albums: [],
  isLoading: false,
  error: null
}

function startLoading(state: AlbumState) {
  state.isLoading = true
}

function loadingFailed(state: AlbumState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const albums = createSlice({
  name: 'albums',
  initialState: albumsInitialState,
  reducers: {
    getAlbumsStart: startLoading,
    getAlbumsSuccess(state, { payload }: PayloadAction<Album[]>) {
      state.albums = payload
      state.isLoading = false
      state.error = null
    },
    getAlbumsFailure: loadingFailed
  }
})

export const {
  getAlbumsStart,
  getAlbumsSuccess,
  getAlbumsFailure
} = albums.actions

export default albums.reducer

export const fetchAlbums = (): AppThunk => async dispatch => {
  try {
    dispatch(getAlbumsStart())
    const albums = await getAlbums()
    if (albums) {
      dispatch(getAlbumsSuccess(albums))
    }
  } catch (err) {
    dispatch(getAlbumsFailure(err.toString()))
  }
}

