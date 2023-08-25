import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface optionState{
    optionValue : string
    
}
    


// 이니셜라이징 할때 기본값
const initialState :optionState = {
    optionValue : "A"
};

export const changeSlice = createSlice({
    name : "changeOptionValue", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        // 타입을 지정해주는데 객체 타입으로 타입을 지정해줌
        changeOptionValue : (state , action: PayloadAction<string>) =>{
            console.log("changeOptionValue");
            state.optionValue = action.payload;
        },
        changeOptionInitValue  : (state) =>{
            console.log("changeOptionInitValue");
            state.optionValue = initialState.optionValue;
        },
    }
    

})


export const  cardOptionActions = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

