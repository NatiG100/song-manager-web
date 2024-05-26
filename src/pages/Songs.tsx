import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Song from './../components/song/Song.tsx';
import { FilterInputList, SongList } from './../components/song/SongElements.ts';
import Surface from '../components/Surface/index.tsx';
import { Input } from '../components/ui/Input.ts';
import { SongT } from '../../types/entities.ts';
import { Button } from '../components/ui/Button.ts';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../context/reducer.ts';
import { createSongAction, fetchMoreSongsAction, fetchSongsAction } from '../context/song/slice.ts';
import { useDebounce } from 'use-debounce';
export default function Songs(){
    const {isLoading,data,count,error} = useSelector((state:StateType)=>state.songs.songs);
    const [isFormModalOpen,setIsFormModalOpen] = useState<boolean>(true);
    const [isEdit,setIsEdit] = useState<boolean>(true);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        
    },[location])
    const handleSongOpen = (songId:string)=>{
        setIsEdit(true);
        navigate(`/${songId}`);
    }
    const closeFormModal = useCallback(()=>{
        setIsFormModalOpen(false);
    },[]);
    const dispatch = useDispatch();
    const [title,setTitle] = useState<string>("");
    const [debauncedTitle] = useDebounce(title,500);
    const [genre,setGenre] = useState<string>("")
    const [debauncedGenre] = useDebounce(genre,500);
    const [album,setAlbum] = useState<string>("");
    const [debauncedAlbum] = useDebounce(album,500);
    const [artist,setArtist] = useState<string>("");
    const [debauncedArtist] = useDebounce(artist,500);
    useEffect(()=>{
        if(dispatch){
            dispatch(fetchMoreSongsAction(
                {
                    pagination:{skip:0,limit:10},
                    filter:{
                        title:debauncedTitle,
                        album:debauncedAlbum,
                        artist:debauncedArtist,
                        genre:debauncedGenre
                    }
                }
            ));
        }
    },[debauncedAlbum,debauncedArtist,debauncedGenre,debauncedTitle,dispatch])
    
    if(isLoading) return <p>Loadin</p>
    return (
        <>
            <Button
                onClick={()=>{setIsEdit(false);setIsFormModalOpen(true)}}
            >Add New Song</Button>
            <FilterInputList>
                <Input 
                    placeholder='filter by title'
                    value={title}
                    onChange={(e)=>{setTitle(e.currentTarget.value)}}
                />
                <Input 
                    placeholder='filter by album'
                    value={album}
                    onChange={(e)=>{setAlbum(e.currentTarget.value)}}
                />
                <Input 
                    placeholder='filter by artist'
                    value={artist}
                    onChange={(e)=>{setArtist(e.currentTarget.value)}}
                />
                <Input 
                    placeholder='filter by genre'
                    value={genre}
                    onChange={(e)=>{setGenre(e.currentTarget.value)}}
                />
            </FilterInputList>
            <SongList>
                <FormModal onClose={closeFormModal} isOpen={isFormModalOpen} isEdit={isEdit}/>
                {data&&data.map((song)=>(
                    <Song
                        key={song._id}
                        _id={song._id}
                        album={song.album}
                        artist={song.artist}
                        createdAt={new Date(song.createdAt)}
                        genre={song.genre}
                        title={song.title}
                        onClick={()=>{handleSongOpen(song._id)}}
                    />
                ))}
                
            </SongList>
        </>
    );
};


export interface EditModalProps{
    isOpen:boolean,
    onClose:()=>void,
    isEdit:boolean,
}
export function FormModal({isOpen,onClose,isEdit}:EditModalProps){
    const dispatch = useDispatch();
    function createSong(){
        dispatch(createSongAction({
            album:song.album,
            artist:song.artist,
            genre:song.genre,
            title:song.title,
        }));
    }
    const [song,setSong] = useState<SongT>(
        {
            _id:'',
            album:'',
            artist:'',
            createdAt:new Date(),
            genre:'',
            title:'',
        }
    )
    useEffect(()=>{
        if(isEdit){
            setSong({
                _id:'asdfasddfa',
                album:'Gravity',
                artist:'Lecrea',
                createdAt:new Date(),
                genre:'Hip Hop',
                title:'Gravity',
            });
        }else{
            setSong(
                {
                    _id:'',
                    album:'',
                    artist:'',
                    createdAt:new Date(),
                    genre:'',
                    title:'',
                }
            );
        }
    },[isEdit])
    const fields = useMemo(()=>(["album","artist","genre","title"]),[])
    const changeSongInfo = useCallback((field:string,value:string)=>{
    if(fields.includes(field)){
        setSong((currentState)=>({...currentState,[field]:value}));
    }
    },[setSong,fields]);
    
    return(
        <Surface isOpen={isOpen} onClose={onClose}>
            <form>
                <h2 style={{color:"#4086cd"}}>Edit Song</h2>
                <Input 
                    placeholder='Artist' 
                    id="edit-artist" 
                    value={song.artist} 
                    onChange={(event)=>{changeSongInfo("artist",event.currentTarget.value)}}
                />
                <Input 
                    placeholder='Title' 
                    id="edit-title" 
                    value={song.title} 
                    onChange={(event)=>{changeSongInfo("title",event.currentTarget.value)}}
                /> 
                <Input 
                    placeholder='Album' 
                    id="edit-album" 
                    value={song.album} 
                    onChange={(event)=>{changeSongInfo("album",event.currentTarget.value)}}
                /> 
                <Input 
                    placeholder='Genre' 
                    id="edit-genre" 
                    value={song.genre} 
                    onChange={(event)=>{changeSongInfo("genre",event.currentTarget.value)}}
                />
                <Button 
                    onClick={isEdit?()=>{}:createSong}    
                >
                    {isEdit?"Save Changes":"Add Song"}
                </Button> 
                <Button onClick={onClose}>Cancel</Button> 
            </form>
        </Surface>
    );
}