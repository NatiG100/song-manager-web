import Resource from "./Resource";
import { TCreateSong, TErrorRes, TListResponse, TPagination, TResponse, TSong, TUpdateSong } from "./types";
import axiosClient from "./axiosClient";

export default class Song extends Resource{
    async fetchById({id}:{id:string}){
        return  axiosClient.get<TErrorRes,TResponse<TSong>>(
            `${this.path}/${id}`
        );
    }
    async fetchMany({pagination}:{pagination:TPagination}){
        return axiosClient.get<TErrorRes,TListResponse<TSong>>(
            `${this.path}/?skip=${pagination.skip}&limit=${pagination.limit}`
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