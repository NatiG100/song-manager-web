import Resource from "./Resource.ts";
import axiosClient from "./axiosClient.ts";
import { TErrorRes, TResponse, TStat } from "./types.ts";

export default class Stat extends Resource{
    async generalStat(){
        return  axiosClient.get<TErrorRes,TResponse<TStat>>(
            `${this.path}/general-stat`
        );
    }
}