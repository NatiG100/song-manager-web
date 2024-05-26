import songManagerApi from "../../songManagerApi.ts";
import { TCreateSong, TErrorRes, TListResponse, TPagination, TResponse, TSong, TUpdateSong } from "../../api/types.ts";
import {call, fork, put, take, takeLatest} from 'redux-saga/effects'
import { fetchSongErrorAction, fetchSongSuccesAction, fetchSongsAction } from "./slice.ts";
import { AxiosResponse } from "axios";
import { CREATE_SONG, DELETE_SONG, FETCH_SONGS, UPDATE_SONG } from "./types.ts";
import { PayloadAction } from "@reduxjs/toolkit";
import { Socket, io } from "socket.io-client";
import { resolve } from "path";
import { eventChannel } from "redux-saga";

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


function connect(){
    const socket = io('ws://localhost:4000');
    return new Promise(resolve=>{
        socket.on('connect',()=>{
            resolve(socket);
        })
    })
}

export function* flow(){
    const socket = yield call(connect);
    yield fork(read,socket);
}

function* read(socket:Socket){
    const channel = yield call(subscribe,socket);
    while(true){
        let action = yield take(channel)
        yield put(action);
    }
}

export function* subscribe(socket:Socket){
    return eventChannel(emit=>{
        const handler = post=>emit(fetchSongsAction());
        socket.on('song-created',handler);
        socket.on('song-updated',handler);
        socket.on('song-deleted',handler);
        return()=>{

        }
    })
}