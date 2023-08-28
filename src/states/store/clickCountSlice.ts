import {createSelector, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ClickState{
    number : number
}

// 이니셜라이징 할때 기본값
const initialState :ClickState = {number : 0};

export const changeSlice = createSlice({
    name : "clickCount", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        increaseCount : (state) =>{
            console.log("increaseCount");
            state.number = state.number+1;
        },
        initialCount : (state) =>{
            console.log("initialCount");
            state.number = 0;
        }
    }
    

})

// 값이 있으면 사용하고 , 없으면 초기값을 가져다 사용
const _clickCount = (state:RootState)=>state.increaseCount.number || initialState.number; 

export const clickCountSelector = createSelector(
    [_clickCount],
    (number,)=>{return number }
)


export const clickActions = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

