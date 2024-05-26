export interface SongT{
    _id:string,
    title:string,
    artist:string,
    album:string,
    genre:string,
    createdAt:Date,
    upudatedAt?:Date,
}
export interface GeneralStatT{
    totalSongs:number,
    totalArtists:number,
    totalAlbums:number,
    totalGenres:number,
    songsInGenre:{_id:string,total:number}[],
    songsInAlbum:{_id:string,total:number}[],
    songsByArtist:{_id:string,total:number}[],
    albumsByArtist:{_id:string,total:number}[],
}