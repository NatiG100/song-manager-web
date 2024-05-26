import { SongsStateType } from "./song/types.ts"
import songReducer from "./song/slice.ts"

export type StateType = {
    songs:SongsStateType,
}
const reducer = {
    songs:songReducer
}
export default reducer;