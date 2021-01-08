import React, { createContext, useContext, useReducer } from "react"
import { Photo } from "../types"
import { Action } from "./reducer"

export type State = {
  photos: { [id: string]: Photo };
}

const initialState: State = {
  photos: {}
}

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
])

type StateProviderProps = {
  reducer: React.Reducer<State, Action>
  children: React.ReactElement
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]} >
      { children}
    </StateContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStateValue = () => useContext(StateContext)

export const setPhotoList = (content: Photo[]): Action => {
  return {
    type: "SET_PHOTO_LIST",
    payload: content
  }
}
