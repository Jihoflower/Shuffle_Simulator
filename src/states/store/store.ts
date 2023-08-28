import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import changeTab from "./changeTabSlice";
import  changeImage  from "./imageSlice";
import  changeOption  from "./optionSlice";
import  increaseCount   from "./clickCountSlice";
import  initialCount   from "./clickCountSlice";
import  sufChangeOption  from "./sufOptionSlice";
import sufChangeOptionInit from "./sufOptionSlice";
import changeOptionValue    from "./cardOptionSlice";
import changeOptionInitValue    from "./cardOptionSlice";
import changeColor from "./colorOptionSlice";
import  changeColorInit  from "./colorOptionSlice";
import changeOptionLock  from "./optionSlice";
import  preChangeOption  from "./sufOptionSlice";
import  preChangeOptionInit  from "./sufOptionSlice";

 

export const store = configureStore({
    // 해당 부분에 필요한 reducer를 삽입
    reducer:{
        
        //slice에서 생성한 reducer name 기입 (import 해야함)
        changeTab:changeTab,
        changeImage:changeImage,
        changeOption:changeOption,
        increaseCount:increaseCount,
        initialCount : initialCount,
        sufChangeOption:sufChangeOption,
        sufChangeOptionInit : sufChangeOptionInit,
        changeOptionValue : changeOptionValue,
        changeOptionInitValue : changeOptionInitValue,
        changeColor : changeColor,
        changeColorInit : changeColorInit,
        changeOptionLock : changeOptionLock,
    },
    devTools: process.env.NODE_ENV !== 'production',

 

});

export type RootState = ReturnType<typeof store.getState>; // type을 export 함
export type AppDispatch = typeof store.dispatch;
