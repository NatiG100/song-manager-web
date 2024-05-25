import {Optional,Omit} from 'utility-types'

export interface TResponse<T>{
    data:T,
    message:string
}
export type TListResponse<T> = TResponse<{items:T[],count:number}> 

export interface TSong{
    title:string,
    _id:string,
    artist:string,
    album:string,
    genre:string,
    createdAt:Date,
    updatedAt:Date,
}

export interface TGroupedStatItem{
    _id:string,
    total:number,
}
export interface TStat{
    totalSongs:number,
    totalAlbums:number,
    totalArtists:number,
    totalGenres:number,
    songsInGenre:TGroupedStatItem[],
    songsInAlbum:TGroupedStatItem[],
    songsByArtist:TGroupedStatItem[],
    albumsByArtist:TGroupedStatItem[],
}

export interface TErrorRes{
    status:string,
    message:string,
}

export interface TPagination{
    skip:number,
    limit:string,
}
export type TCreateSong = Omit<TSong,"_id"|"createdAt"|"updatedAt">;
export type TUpdateSong = Optional<TCreateSong>;
