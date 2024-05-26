import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer.ts"
import createSagaMiddleware from "@redux-saga/core"
import saga from "./saga.ts";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([sagaMiddleware])
});

sagaMiddleware.run(saga);
export default store;
