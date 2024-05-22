import React from 'react'
import { SongContent, SongHeader, SongInfo, SongInfoIcon, SongInfoTitle, SongInfoValue, SongInfoWithIcon, SongMain, SongTitle } from './SongElements.ts';
import { SongT } from '../../../types/entities.ts';
import Album from './../../assets/svg/album.svg';
import Artist from './../../assets/svg/artist.svg';
import Delete from './../../assets/svg/delete.svg';
import { GhostButton } from '../ui/Button.ts';
export default function Song(song:SongT&{onClick?:()=>void}){
    return(
        <SongMain onClick={song.onClick}>
            <SongHeader>
                <div>
                    <SongTitle>{song.title}</SongTitle>
                    <p style={{fontSize:"12px",color:"#656566",fontWeight:"bold"}}>{song.genre}</p>
                </div>
                <GhostButton>
                    <img src={Delete} height={20} width={20}/>
                </GhostButton>
            </SongHeader>
            <SongContent>
                <SongInfoWithIcon>
                    <img src={Artist} height={40} width={40}/>
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
                    <img src={Album} height={40} width={40}/>
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