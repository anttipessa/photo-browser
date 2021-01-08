import { State } from "./state"
import { Photo } from "../types"

export type Action =
   {
    type: "SET_PHOTO_LIST"
    payload: Photo[]
  }
  

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PHOTO_LIST":
      return {
        ...state,
        photos: {
          ...action.payload.reduce(
            (memo, photo) => ({ ...memo, [photo.id]: photo }),
            {}
          ),
          ...state.photos
        }
      }
    default:
      return state
      }
  }