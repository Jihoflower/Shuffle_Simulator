import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface optionState{
    div1 : Boolean,
    div2 : Boolean,
    div3 : Boolean,
    
}
    


// 이니셜라이징 할때 기본값
const initialState :optionState = {
    div1 : true,
    div2 : true,
    div3 : true
};

export const changeSlice = createSlice({
    name : "changeColor", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        // 타입을 지정해주는데 객체 타입으로 타입을 지정해줌
        changeColor : (state , action: PayloadAction<Boolean>) =>{
            console.log("changeColor");
            state.div1 = action.payload;
            state.div2 = action.payload;
            state.div3 = action.payload;
        },
        changeColorInit  : (state) =>{
            state.div1 = initialState.div1;
            state.div2 = initialState.div2;
            state.div3 = initialState.div3;
        },
    }
    

})


export const changeColorActions = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

