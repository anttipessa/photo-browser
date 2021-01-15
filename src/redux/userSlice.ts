/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUsers } from '../services/users'
import { User } from '../types'
import { AppThunk } from './store'


interface UserState {
  users: User[]
  isLoading: boolean
  error: string | null
}

const usersInitialState: UserState = {
  users: [],
  isLoading: false,
  error: null
}

function startLoading(state: UserState) {
  state.isLoading = true
}

function loadingFailed(state: UserState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const users = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUsersStart: startLoading,
    getUsersSuccess(state, { payload }: PayloadAction<User[]>) {
      state.users = payload
      state.isLoading = false
      state.error = null
    },
    getUsersFailure: loadingFailed
  }
})

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure
} = users.actions

export default users.reducer

export const fetchUsers = (): AppThunk => async dispatch => {
  try {
    dispatch(getUsersStart())
    const users = await getUsers()
    if (users) {
      dispatch(getUsersSuccess(users))
    }
  } catch (err) {
    dispatch(getUsersFailure(err.toString()))
  }
}