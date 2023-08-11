import { Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { fontFamily } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../states/store/store'
import { changeOptionValue } from '../states/store/cardOptionSlice'

const cardOptionValue = [
    {label : "공격" , value : "A"},
    {label : "수비" , value : "D"},
    {label : "재능" , value : "T"}
]

export const ComboComponent = () => {
    const cardOptionValueState = useSelector((state :RootState)=>state.changeOptionValue).optionValue; // 옵션 상태
    const dispatch = useDispatch();

    const handleChange = (e : SelectChangeEvent)=>{
        dispatch(changeOptionValue(e.target.value));
    }
    
  return (
<FormControl sx={{width : 120}} size='small'>
  <InputLabel>카드 종류</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    label="Age"
    defaultValue='A'
     onChange={handleChange}
  >
    <MenuItem value='A'>공격</MenuItem>
    <MenuItem value='D'>수비</MenuItem>
    <MenuItem value='T'>재능</MenuItem>
  </Select>
</FormControl>
  )
}
