import {TErrorRes,TStat } from "../../api/types.ts";
import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { STAT, StatStateType } from "./types.ts";

const initialStatState:StatStateType = {
    stat:{
        data:null,
        isLoading:false,
        error:null,
    }
};

export const statSlice = createSlice({
    name:STAT,
    initialState:initialStatState,
    reducers:{
        fetchStatAction:(state:StatStateType)=>{
            state.stat.isLoading = true;
            state.stat.error = null;
        },
        fetchStatSuccesAction:(state:StatStateType,{payload:stat}:PayloadAction<TStat>)=>{
            state.stat.data = stat;
            state.stat.error = null;
            state.stat.isLoading = false;
        },
        fetchStatErrorAction:(state:StatStateType,{payload:error}:PayloadAction<TErrorRes>)=>{
            state.stat.error = error;
            state.stat.isLoading = false;
            state.stat.data = null;
        },
        updateStatAction:(state:StatStateType,{payload:stat}:PayloadAction<TStat>)=>{
            state.stat.data =stat;
        }
    }
});

export const {
    fetchStatAction,
    fetchStatErrorAction,
    fetchStatSuccesAction,
    updateStatAction,
} = statSlice.actions;

export default statSlice.reducer;