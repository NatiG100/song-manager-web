import { SongsStateType } from "./song/types.ts"
import songReducer from "./song/slice.ts"
import statReducer from "./stat/slice.ts"
import { StatStateType } from "./stat/types.ts"

export type StateType = {
    songs:SongsStateType,
    stat:StatStateType,
}
const reducer = {
    songs:songReducer,
    stat:statReducer,
}
export default reducer;