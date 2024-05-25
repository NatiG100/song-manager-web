export default abstract class Resource{
    path:string;
    constructor({path}:{path:string}){
        this.path = path;
    }
}