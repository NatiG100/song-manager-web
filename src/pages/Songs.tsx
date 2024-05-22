import React, { useCallback, useState } from 'react'
import Song from './../components/song/Song.tsx';
import { SongList } from './../components/song/SongElements.ts';
import Surface from '../components/Surface/index.tsx';
export default function Songs(){
    const [isEditModalOpen,setIsEditModalOpen] = useState<boolean>(true);
    const closeEditModal = useCallback(()=>{
        setIsEditModalOpen(false);
    },[])
    return (
        <SongList>
            
            <Song
                _id='asdfasddfa'
                album='Gravity'
                artist='Lecrea'
                createdAt={new Date()}
                genre='Hip Hop'
                title='Gravity'
            />
            <Song
                _id='asdfasddfa'
                album='Gravity'
                artist='Lecrea'
                createdAt={new Date()}
                genre='Hip Hop'
                title='Gravity'
            />
            <Song
                _id='asdfasddfa'
                album='Gravity'
                artist='Lecrea'
                createdAt={new Date()}
                genre='Hip Hop'
                title='Gravity'
            />
            <Song
                _id='asdfasddfa'
                album='Gravity'
                artist='Lecrea'
                createdAt={new Date()}
                genre='Hip Hop'
                title='Gravity'
            />
        </SongList>
    );
};


// export 
// export function EditModal({})