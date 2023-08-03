import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../states/store/store';
import {SplitButtonComponent} from './SplitButtonComponent';
import { sufChangeOption } from '../states/store/sufOptionSlice';



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



export const SufCardComponent = () => {
const changeImage = useSelector((state :RootState)=>state.changeImage);
const changeOption = useSelector((state :RootState)=>state.changeOption);

  return (
    <CardMain>
        <CardMedia2 >
            <img src={`${process.env.PUBLIC_URL}/media/`+`${changeImage}`}/>
            <Options>
                {changeOption.options.opt1} +15<br/>
                {changeOption.options.opt2} +15<br/>
                {changeOption.options.opt3} +15
                {/* <SplitButtonComponent flag={false}/>
                <SplitButtonComponent flag={false}/>
                <SplitButtonComponent flag={false}/> */}
            </Options>
        </CardMedia2>
    </CardMain>
  )
}
