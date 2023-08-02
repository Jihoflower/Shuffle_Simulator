import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { fontFamily } from '@mui/system';
import { SyntheticEvent } from 'react';
import { changeTab } from '../states/store/changeTabSlice';
import { changeOption } from '../states/store/optionSlice';

const optionsList = [
    {name : "3점슛 성공률 상승 +15" ,value : 'A1' , percent : 0.1},
    {name : "미들슛 성공률 상승 +15", value : 'A2', percent : 0.3},
    {name : "덩크슛 성공률 상승 +15" , value : 'A3',percent : 0.5},
    {name : "돌파 속도 상승 +15" , value : 'A4' , percent : 0.1}
  ];



export const SplitButtonComponent = () => {

    const handleChange = (e : SyntheticEvent , newValue : object) =>{
        console.log(e);
        console.log(newValue);
    }

  return (
    <div></div>
  )


}
function dispatch(arg0: { payload: number; type: "change/changeTab"; }) {
    throw new Error('Function not implemented.');
}

