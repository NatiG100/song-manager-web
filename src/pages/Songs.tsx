import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Song from './../components/song/Song.tsx';
import { FilterInputList, SongList } from './../components/song/SongElements.ts';
import Surface from '../components/Surface/index.tsx';
import { Input } from '../components/ui/Input.ts';
import { SongT } from '../../types/entities.ts';
import { Button } from '../components/ui/Button.ts';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
export default function Songs(){
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
    },[])
    return (
        <>
            <Button
                onClick={()=>{setIsEdit(false);setIsFormModalOpen(true)}}
            >Add New Song</Button>
            <FilterInputList>
                <Input placeholder='filter by title'/>
                <Input placeholder='filter by album'/>
                <Input placeholder='filter by artist'/>
                <Input placeholder='filter by genre'/>
            </FilterInputList>
            <SongList>
                <FormModal onClose={closeFormModal} isOpen={isFormModalOpen} isEdit={isEdit}/>
                <Song
                    _id='asdfasddfa'
                    album='Gravity'
                    artist='Lecrea'
                    createdAt={new Date()}
                    genre='Hip Hop'
                    title='Gravity'
                    onClick={()=>{handleSongOpen("asdfasddfa")}}
                />
                <Song
                    _id='asdfasddfa'
                    album='Gravity'
                    artist='Lecrea'
                    createdAt={new Date()}
                    genre='Hip Hop'
                    title='Gravity'
                    onClick={()=>{handleSongOpen("asdfasddfa")}}
                />
                <Song
                    _id='asdfasddfa'
                    album='Gravity'
                    artist='Lecrea'
                    createdAt={new Date()}
                    genre='Hip Hop'
                    title='Gravity'
                    onClick={()=>{handleSongOpen("asdfasddfa")}}
                />
                <Song
                    _id='asdfasddfa'
                    album='Gravity'
                    artist='Lecrea'
                    createdAt={new Date()}
                    genre='Hip Hop'
                    title='Gravity'
                    onClick={()=>{handleSongOpen("asdfasddfa")}}
                />
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
                <Button type='submit'>{isEdit?"Save Changes":"Add Song"}</Button> 
                <Button onClick={onClose}>Cancel</Button> 
            </form>
        </Surface>
    );
}