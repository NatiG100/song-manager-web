import Song from "./Song";
import Stat from "./Stat";

export default class SongManagerApi{
    song:Song;
    stat:Stat;
    constructor(){
        this.song = new Song({path:"/songs"});
        this.stat = new Stat({path:"/stats"});
    }
}