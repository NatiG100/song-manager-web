import Resource from "./Resource.ts";
import { TCreateSong, TErrorRes, TListResponse, TPagination, TResponse, TSong, TSongFilter, TUpdateSong } from "./types.ts";
import axiosClient from "./axiosClient.ts";

export default class Song extends Resource{
    async fetchById({id}:{id:string}){
        return  axiosClient.get<TErrorRes,TResponse<TSong>>(
            `${this.path}/${id}`
        );
    }
    filter(key:string,filter?:string):string{
        const f =  filter?("&"+key+"="+filter):"";
        return f;
    }
    async fetchMany({pagination,filter}:{pagination:TPagination,filter?:TSongFilter}){
        console.log(filter);
        return axiosClient.get<TErrorRes,TListResponse<TSong>>(
            `${this.path}?skip=${pagination.skip}&limit=${pagination.limit}`+
            `${this.filter("title",filter?.title)}`+
            `${this.filter("artist",filter?.artist)}`+
            `${this.filter("album",filter?.album)}`+
            `${this.filter("genre",filter?.genre)}`
        );
    }
    async create({song}:{song:TCreateSong}){
        return axiosClient.post<TErrorRes,TResponse<TSong>>(
            `${this.path}`,
            song
        )
    }
    async update({song,id}:{song:TUpdateSong,id:string}){
        return  axiosClient.patch<TErrorRes,TResponse<TSong>>(
            `${this.path}/${id}`,
            song
        );
    }
    async delete({id}:{id:string}){
        return  axiosClient.delete<TErrorRes,TResponse<TSong>>(
            `${this.path}/${id}`
        );
    }
}