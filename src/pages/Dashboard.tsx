import React from "react"
import { StatList } from "../components/stats/StatBox/StatBoxElements.ts";
import StatBox from "../components/stats/StatBox/StatBox.tsx";
import StatTable from "../components/stats/StatTable/StatTable.tsx";
import { StateType } from "../context/reducer.ts";
import { useSelector } from "react-redux";
export default function Dashboard(){
    const {isLoading,data,error} = useSelector((state:StateType)=>state.stat.stat);
    if(isLoading) return<p>Loading</p>
    if(error||!data) return<p>Error</p>
    return (
        <div style={{width:"100%", display:"grid",gridTemplateRows:"max-content max-content",gap:"20px",marginTop:"40px"}}>
            <StatList>
                <StatBox
                    title="Number of Artists"
                    description={`${data.totalArtists}`}
                />
                <StatBox
                    title="Number of Songs"
                    description={`${data.totalSongs}`}
                />
                <StatBox
                    title="Number of Albums"
                    description={`${data.totalAlbums}`}
                />
                <StatBox
                    title="Number of Genres"
                    description={`${data.totalGenres}`}
                />

            </StatList>
            <StatList>
                <StatTable 
                    _idHeader="Genre" 
                    valueHeader="Number of Songs" 
                    data={data.songsInGenre}
                />
                <StatTable 
                    _idHeader="Artist" 
                    valueHeader="Number of Songs" 
                    data={data.songsByArtist}
                />
                <StatTable 
                    _idHeader="Album" 
                    valueHeader="Number of Songs" 
                    data={data.songsInAlbum}
                />
                <StatTable 
                    _idHeader="Artist" 
                    valueHeader="Number of Albums" 
                    data={data.albumsByArtist}
                />
            </StatList>
        </div>
    );
}