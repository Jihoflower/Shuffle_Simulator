import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ChangeState{
    number : number
}

// 이니셜라이징 할때 기본값
const initialState :ChangeState = {number : 0};

export const changeSlice = createSlice({
    name : "clickCount", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        increaseCount : (state) =>{
            state.number = state.number+1;
        },
        initialCount : (state) =>{
            state.number = 0;
        }
    }
    

})


export const {increaseCount , initialCount} = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

