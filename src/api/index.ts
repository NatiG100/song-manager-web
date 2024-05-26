import Song from "./Song.ts";
import Stat from "./Stat.ts";

export default class SongManagerApi{
    song:Song;
    stat:Stat;
    constructor(){
        this.song = new Song({path:"songs"});
        this.stat = new Stat({path:"stats"});
    }
}