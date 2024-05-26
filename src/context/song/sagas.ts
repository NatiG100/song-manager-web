import songManagerApi from "../../songManagerApi.ts";
import { TCreateSong, TErrorRes, TListResponse, TResponse, TSong, TUpdateSong } from "../../api/types.ts";
import { put, takeLatest} from 'redux-saga/effects'
import { fetchSongErrorAction, fetchSongSuccesAction } from "./slice.ts";
import { AxiosResponse } from "axios";
import { CREATE_SONG, DELETE_SONG, FETCH_SONGS, UPDATE_SONG } from "./types.ts";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchSongsSaga(){
    try{
        const response:AxiosResponse<TListResponse<TSong>,TErrorRes> = yield songManagerApi.song.fetchMany({pagination:{skip:0,limit:10}});
        yield put(fetchSongSuccesAction(response.data.data));
    }catch(err:any){
        yield put(fetchSongErrorAction(err))
    }
}

export function* watchFetchSongs(){
    yield takeLatest(FETCH_SONGS, fetchSongsSaga);
}

export function* createSongSaga({payload:song}:PayloadAction<TCreateSong>){
    try{
        const response:AxiosResponse<TResponse<TSong>,TErrorRes> = yield songManagerApi.song.create({song});
    }catch(e:any){
        yield put(fetchSongErrorAction(e))
    }
}
export function* watchCreateSong(){
    yield takeLatest(CREATE_SONG,createSongSaga);
}

export function* updateSongSaga({payload:song}:PayloadAction<{song:TUpdateSong,id:string}>){
    try{
        const response:AxiosResponse<TResponse<TSong>,TErrorRes> = yield songManagerApi.song.update(song);
    }catch(e:any){
        yield put(fetchSongErrorAction(e))
    }
}
export function* watchUpdateSong(){
    yield takeLatest(UPDATE_SONG,updateSongSaga);
}

export function* deleteSongSaga({payload:options}:PayloadAction<{id:string}>){
    try{
        const response:AxiosResponse<TResponse<TSong>,TErrorRes> = yield songManagerApi.song.delete(options);
    }catch(e:any){
        yield put(fetchSongErrorAction(e))
    }
}
export function* watchDeleteSong(){
    yield takeLatest(DELETE_SONG,deleteSongSaga);
}
