import { Card, CardContent, CardMedia, Checkbox, ClickAwayListenerProps, FormControlLabel, SelectChangeEvent, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../states/store/store';
import {SplitButtonComponent} from './SplitButtonComponent';
import { sufChangeActions } from '../states/store/sufOptionSlice';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box, style, width } from '@mui/system';
import { hover } from '@testing-library/user-event/dist/hover';
import { ClassNames } from '@emotion/react';
import { CustomElement } from 'react-hook-form';
import {optionActions}  from '../states/store/optionSlice';




let IMAGEPATH : string;

const IMAGE_PATH = (fileName : string) =>{
    IMAGEPATH = "process.env.PUBLIC_URL/media/" + fileName;
    return IMAGEPATH;
}

//css
const CardMain = styled(Card)({
    width : '24vw',
    height :'60vh',
    
    
})

const CardMedia2 = styled(CardMedia)({
    height : '100%',
    width : '100%',
    // backgroundImage : public2,
    
})

const Options = styled(CardContent)({
 
    fontFamily : 'appleB',
    color : 'black',
    justifyContent : 'center',
    padding : '0',

})

const IsSelectBox = styled(Box)({
    backgroundColor : 'red'
})

const SelectBox = styled(Box)({
    backgroundColor : 'green'
})





export const SufCardComponent = () => {
const changeImage = useSelector((state :RootState)=>state.changeImage);
const changeOption = useSelector((state :RootState)=>state.changeOption);
const changeColor = useSelector((state :RootState)=>state.changeColor);
const dispatch = useDispatch();

//임시 잠금
const lockOption = (index : number , opt : string)=>{
    switch (index){
        case 1:
            console.log(1);
            dispatch(optionActions.changeOptionLock(opt));
            break;

        case 2:
            console.log(2);

            break;

        case 3:
            console.log(3);

            break;

        default:
            break;
    }

    
    
}



  return (
    <CardMain>
        <CardMedia2 >
            <img src={`${process.env.PUBLIC_URL}/media/`+`${changeImage}`}/>
            
            <Options > 
                <SelectBox  onClick={()=>lockOption(1,changeOption.options[0].opt)}> {/*함수를 바로 호출하지말고 콜백으로 처리해야함*/}
                    {changeOption.options[0].opt} +15 {}
                </SelectBox>
                <SelectBox className='opt1' onClick={()=>lockOption(2,changeOption.options[1].opt)}>
                    {changeOption.options[1].opt} +15 
                </SelectBox>
                <SelectBox className='opt1' onClick={()=>lockOption(3,changeOption.options[2].opt)}>
                    {changeOption.options[2].opt} +15 
                </SelectBox>
            </Options>
            
        </CardMedia2>
    </CardMain>
  )
}
