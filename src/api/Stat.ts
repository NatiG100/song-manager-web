import Resource from "./Resource";
import axiosClient from "./axiosClient";
import { TErrorRes, TResponse, TStat } from "./types";

export default class Stat extends Resource{
    async generalStat({id}:{id:string}){
        return  axiosClient.get<TErrorRes,TResponse<TStat>>(
            `${this.path}/general-stat`
        );
    }
}