import React from 'react'
import { SongContent, SongHeader, SongInfo, SongInfoIcon, SongInfoTitle, SongInfoValue, SongInfoWithIcon, SongMain, SongTitle } from './SongElements.ts';
import { SongT } from '../../../types/entities.ts';
export default function Song(song:SongT){
    return(
        <SongMain>
            <SongHeader>
                <SongTitle>{song.title}</SongTitle>
                <p>{song.genre}</p>
            </SongHeader>
            <SongContent>
                <SongInfoWithIcon>
                    <SongInfoIcon src="/album.png"/>
                    <SongInfo>
                        <SongInfoTitle>
                            Artist
                        </SongInfoTitle>
                        <SongInfoValue>
                            {song.artist}
                        </SongInfoValue>
                    </SongInfo>
                </SongInfoWithIcon>
                <SongInfoWithIcon>
                    <SongInfoIcon src="/user.png"/>
                    <SongInfo>
                        <SongInfoTitle>
                            Album
                        </SongInfoTitle>
                        <SongInfoValue>
                            {song.album}
                        </SongInfoValue>
                    </SongInfo>
                </SongInfoWithIcon>
            </SongContent>
        </SongMain>
    );
}