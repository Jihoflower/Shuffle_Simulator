import {createSlice , createAsyncThunk, createSelector} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface optionState{
    // 일일이 배열을 설정해도 되지만 추후에 객체배열로 인식을 못하는 경우가 생김
    // => {}[]로 작성해서 객체 배열임을 명시
    options : {opt : string , flag : boolean}[];
    
}
    


// 이니셜라이징 할때 기본값
const initialState :optionState = {
    options:[
        {opt : "3점슛성공률상승" , flag : true},
        {opt : "미들슛성공률상승" , flag : true},
        {opt : "덩크슛성공률상승" , flag : true},
    ]
};

export const changeSlice = createSlice({
    name : "changeOption", //createSlice의 이름
    initialState, // 기본 상태
    reducers:{
        
        // 리듀서 목록 파라미터에 state 와 action 을 받음
        // 타입을 지정해주는데 객체 타입으로 타입을 지정해줌
        changeOption : (state , action: PayloadAction<{opt : string , flag : boolean}[]>) =>{
            console.log("changeOption");
            state.options[0].opt = action.payload[0].opt;
            state.options[1].opt = action.payload[1].opt;
            state.options[2].opt = action.payload[2].opt;
            state.options[0].flag = action.payload[0].flag;
            state.options[1].flag = action.payload[1].flag;
            state.options[2].flag = action.payload[2].flag;
        },

        changeOptionLock : (state , action: PayloadAction<string>) =>{
            console.log("changeOptionLock");
            // for(let i = 0 ; i < state.options.length ; i++){
            //     //payload 에 들어온 옵션과 기존 옵션의 값이 같으면
            //     if(state.options[i].opt===action.payload){
            //         //flag 값을 변경
            //         state.options[i].flag = !state.options[i].flag;
            //     }
                
            // }
        },

        changeOptionInit  : (state) =>{
            console.log("changeOptionInit");
            state.options = initialState.options;
        },
    },

    

})
let count = 0;
export const optionState = (state :RootState)=>{
    return state.changeOption.options; // 옵션 상태
}

export const optionSelector = createSelector(
    optionState,
    ()=>{count++; console.log(count); return optionState}
)


export const optionActions = changeSlice.actions ; // 리듀서를 export
export default changeSlice.reducer;

