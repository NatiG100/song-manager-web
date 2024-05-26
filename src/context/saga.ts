import { fork,all } from "redux-saga/effects"
import { flow, watchCreateSong, watchDeleteSong, watchFetchSongs, watchUpdateSong } from "./song/sagas.ts"

const saga = function*(){
    yield all([
        fork(watchFetchSongs),
        fork(watchCreateSong),
        fork(watchUpdateSong),
        fork(watchDeleteSong),
        fork(flow),
    ]);
}

export default saga;