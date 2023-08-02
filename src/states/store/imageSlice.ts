import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface imageState{
    imageName : string
}

// 이니셜라이징 할때 기본값
const initialState :imageState = {imageName : "강아지.jpg"};

export const changeSlice = createSlice({
    name : "changeImage", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        changeImage : (state , action: PayloadAction<string>) =>{
            state.imageName = action.payload
        }
    }
    

})


export const {changeImage} = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

