import { TErrorRes, TSong } from "../../api/types";

export interface ISongState{
    data:TSong[]|null;
    isLoading:boolean,
    error:TErrorRes|null,
    count:number
}
export interface SongsStateType{
    songs:ISongState
}

export const SONG = 'song';
export type SONG = typeof SONG;

export const FETCH_SONGS = `${SONG}/fetchSongsAction`;
export const FETCH_MORE_SONGS = `${SONG}/fetchMoreSongsAction`;
export const CREATE_SONG = `${SONG}/createSongAction`;
export const UPDATE_SONG = `${SONG}/updateSongAction`;
export const DELETE_SONG = `${SONG}/deleteSongAction`;

export type FETCH_SONGS = typeof FETCH_SONGS;
export type FETCH_MORE_SONGS = typeof FETCH_MORE_SONGS;
export type CREATE_SONG = typeof CREATE_SONG;
export type UPDATE_SONG = typeof UPDATE_SONG;
export type DELETE_SONG = typeof DELETE_SONG;