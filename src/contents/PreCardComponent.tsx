import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../states/store/store';
import {SplitButtonComponent} from './SplitButtonComponent';
import { Box } from '@mui/system';
import { sufChangeActions } from '../states/store/sufOptionSlice';



let IMAGEPATH : string;

const IMAGE_PATH = (fileName : string) =>{
    IMAGEPATH = "process.env.PUBLIC_URL/media/" + fileName;
    return IMAGEPATH;
}

//css
const CardMain = styled(Card)({
    Name : 'CardMain',
    width : '24vw',
    height :'60vh',
    backgroundColor : 'yellow',
    margin : 0,
    padding : 0,
    
    
})

const CardMedia2 = styled(CardMedia)({
    height : '100%',
    width : '100%',
    backgroundColor : 'transparent',
    margin : 0,
    padding : 0,
    // backgroundImage : public2,
    
})

const Options = styled(CardContent)({
    // height : '100%',
    fontFamily : 'appleB',
    justifyContent : 'center',
    padding : '0',
    margin : '0',

})



export const PreCardComponent = () => {
const changeImage = useSelector((state :RootState)=>state.changeImage);
const preChangeOption = useSelector((state :RootState)=>state.sufChangeOption);



  return (
    <CardMain>
        <CardMedia2 >
            {/* <img src={`${process.env.PUBLIC_URL}/media/`+`${changeImage}`}/> */}
            <Options>
                <SplitButtonComponent/>
                <SplitButtonComponent/>
                <SplitButtonComponent/>
                <Box >
                {preChangeOption.options[0].opt} +15<br/>
                {preChangeOption.options[1].opt} +15<br/>
                {preChangeOption.options[2].opt} +15
                </Box>
            </Options>
        </CardMedia2>
    </CardMain>
  )
}
