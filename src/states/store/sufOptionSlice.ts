import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface optionState{
    options:{
        opt1 : string,
        opt2 : string,
        opt3 : string
    }
    
}
    


// 이니셜라이징 할때 기본값
const initialState :optionState = {
    options:{
        opt1 : "값 없음",
        opt2 : "값 없음",
        opt3 : "값 없음"
    }
};

export const changeSlice = createSlice({
    name : "sufChangeOption", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        // 타입을 지정해주는데 객체 타입으로 타입을 지정해줌
        sufChangeOption : (state , action: PayloadAction<{opt1 : string, opt2 : string , opt3 : string }>) =>{
            state.options = action.payload;
        }
    }
    

})


export const {sufChangeOption} = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

