import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { fontFamily } from '@mui/system';
import { SyntheticEvent } from 'react';
import { changeTab } from '../states/store/changeTabSlice';
import { changeOption } from '../states/store/optionSlice';





export const SplitButtonComponent = () => {

    const handleChange = (e : SyntheticEvent , newValue : object) =>{
        console.log(e);
        console.log(newValue);
    }

  return (
    <div></div>
  )


}


