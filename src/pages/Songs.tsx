import React from 'react'
import Song from './../components/song/Song.tsx';
import { SongList } from './../components/song/SongElements.ts';
export default function Songs(){
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