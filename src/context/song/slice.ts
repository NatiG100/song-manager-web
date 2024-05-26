import { TCreateSong, TErrorRes, TPagination, TSong, TUpdateSong } from "../../api/types";
import { SONG, SongsStateType } from "./types.ts";
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialSongsState:SongsStateType = {
    songs:{
        data:null,
        count:0,
        isLoading:false,
        error:null,
    }
};

export const songSlice = createSlice({
    name:SONG,
    initialState:initialSongsState,
    reducers:{
        fetchSongsAction:(state:SongsStateType,{}:PayloadAction<{pagination:TPagination}>)=>{
            state.songs.isLoading = true;
            state.songs.error = null;
        },
        fetchSongSuccesAction:(state:SongsStateType,{payload:songs}:PayloadAction<{items:TSong[],count:number}>)=>{
            state.songs.data = songs.items;
            state.songs.error = null;
            state.songs.count = songs.count;
            state.songs.isLoading = false;
        },
        fetchSongErrorAction:(state:SongsStateType,{payload:error}:PayloadAction<TErrorRes>)=>{
            state.songs.error = error;
            state.songs.isLoading = false;
            state.songs.data = null;
        },
        createSongAction:(state:SongsStateType, {payload:song}:PayloadAction<TSong>)=>{
            state.songs.isLoading = true;
            state.songs.error= null;
        },
        updateSongAction:(state:SongsStateType, {payload:song}:PayloadAction<TSong>)=>{
            state.songs.isLoading = true;
            state.songs.error= null;
        },
        deleteSongAction:(state:SongsStateType, {payload:song}:PayloadAction<TSong>)=>{
            state.songs.isLoading = true;
            state.songs.error= null;
        }
    }
});

export const {
    fetchSongsAction,
    fetchSongErrorAction,
    fetchSongSuccesAction,
    createSongAction,
    updateSongAction,
    deleteSongAction,
} = songSlice.actions;

export default songSlice.reducer;