import { fork,all } from "redux-saga/effects"
import { watchCreateSong, watchDeleteSong, watchFetchMoreSongs, watchFetchSongs, watchUpdateSong } from "./song/sagas.ts"
import { watchFetchStat } from "./stat/sagas.ts";
import { flow } from "./subscription/saga.ts";

const saga = function*(){
    yield all([
        fork(watchFetchSongs),
        fork(watchFetchMoreSongs),
        fork(watchCreateSong),
        fork(watchUpdateSong),
        fork(watchDeleteSong),
        fork(watchFetchStat),
        fork(flow),
    ]);
}

export default saga;