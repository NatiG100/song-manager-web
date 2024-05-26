import songManagerApi from "../../songManagerApi.ts";
import { TErrorRes, TResponse, TStat, } from "../../api/types.ts";
import {put, takeLatest} from 'redux-saga/effects'
import { fetchStatSuccesAction } from "./slice.ts";
import { AxiosResponse } from "axios";
import { FETCH_STAT } from "./types.ts";

function* fetchStatSaga(){
    try{
        const response:AxiosResponse<TResponse<TStat>,TErrorRes> = yield songManagerApi.stat.generalStat();
        yield put(fetchStatSuccesAction(response.data.data));
    }catch(err:any){
        yield put(fetchStatSuccesAction(err))
    }
}

export function* watchFetchStat(){
    yield takeLatest(FETCH_STAT, fetchStatSaga);
}