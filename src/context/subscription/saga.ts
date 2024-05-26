import {fork, call, put, take } from "redux-saga/effects";
import { Socket, io } from "socket.io-client";
import { fetchSongsAction } from "../song/slice.ts";
import { fetchStatAction, updateStatAction } from "../stat/slice.ts";
import { eventChannel } from "redux-saga";
import { TStat } from "../../api/types.ts";

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
        const statHandler = (stat:TStat)=>emit(updateStatAction(stat))
        socket.on('song-created',handler);
        socket.on('song-updated',handler);
        socket.on('song-deleted',handler);
        socket.on('new-stat-generated',statHandler);
        return()=>{

        }
    })
}