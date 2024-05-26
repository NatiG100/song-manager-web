import { TErrorRes, TGeneralStat, TSong } from "../../api/types";

export interface IStatState{
    data:TGeneralStat|null;
    isLoading:boolean,
    error:TErrorRes|null,
}
export interface StatStateType{
    stat:IStatState
}

export const STAT = 'stat';
export type STAT = typeof STAT;

export const FETCH_STAT = `${STAT}/fetchStatAction`;

export type FETCH_STAT = typeof FETCH_STAT;