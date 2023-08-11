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
        opt1 : "3점슛성공률상승",
        opt2 : "미들슛성공률상승",
        opt3 : "덩크슛성공률상승"
    }
};

export const changeSlice = createSlice({
    name : "changeOption", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        // 타입을 지정해주는데 객체 타입으로 타입을 지정해줌
        changeOption : (state , action: PayloadAction<{opt1 : string, opt2 : string , opt3 : string }>) =>{
            state.options = action.payload;
        },

        changeOptionLock : (state , action: PayloadAction<{opt1 : string, opt2 : string , opt3 : string }>) =>{
            state.options = action.payload;
        },

        changeOptionInit  : (state) =>{
            state.options = initialState.options;
        },
    }
    

})


export const {changeOption , changeOptionInit , changeOptionLock} = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

