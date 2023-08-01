import { configureStore } from "@reduxjs/toolkit";
import changeTab from "./changeTabSlice";
 

export const store = configureStore({
    // 해당 부분에 필요한 reducer를 삽입
    reducer:{
        //slice에서 생성한 reducer name 기입 (import 해야함)
        changeTab:changeTab,
    }
});

export type RootState = ReturnType<typeof store.getState>; // type을 export 함
export type AppDispatch = typeof store.dispatch;
