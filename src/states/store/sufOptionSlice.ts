import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface optionState{
    options : {opt : string , flag : boolean}[];
    
}
    


// 이니셜라이징 할때 기본값
const initialState :optionState = {
    options:[
        // opt1 : "3점슛성공률상승",
        // opt2 : "미들슛성공률상승",
        // opt3 : "덩크슛성공률상승"

        {opt : "값없음" , flag : true},
        {opt : "값없음" , flag : true},
        {opt : "값없음" , flag : true},
    ]
};

export const changeSlice = createSlice({
    name : "sufChangeOption", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        // 타입을 지정해주는데 객체 타입으로 타입을 지정해줌
        sufChangeOption : (state , action: PayloadAction<{opt : string , flag : boolean}[]>) =>{
            console.log("sufChangeOption");
            state.options = action.payload;
        },

        sufChangeOptionInit : (state) =>{
            console.log("sufChangeOptionInit");
            state.options = initialState.options;
        }
    }
    

})


export const sufChangeActions = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

