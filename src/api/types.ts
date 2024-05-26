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
export type TSongFilter = Pick<TSong,"album"|"artist"|"genre"|"title">;
export interface TGeneralStat{
    totalSongs:number,
    totalArtists:number,
    totalAlbums:number,
    totalGenres:number,
    songsInGenre:{_id:string,total:number}[],
    songsInAlbum:{_id:string,total:number}[],
    songsByArtist:{_id:string,total:number}[],
    albumsByArtist:{_id:string,total:number}[],
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
    limit:number,
}
export type TCreateSong = Omit<TSong,"_id"|"createdAt"|"updatedAt">;
export type TUpdateSong = Optional<TCreateSong>;
