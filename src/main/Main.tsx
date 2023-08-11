import React, { useEffect, useRef, useState } from 'react'
import { bgcolor, Container, margin, maxWidth, palette, textAlign, ThemeProvider, width } from '@mui/system';
import { backdropClasses, createTheme, Grid, Paper, Typography ,Box } from '@mui/material'
import { ShuffleComponent } from '../contents/ShuffleComponent';

// css 
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store/store';

const MainBack = styled(Box)({
  display : 'flex',
  width : 'max',
  height : '100vh',
  backgroundColor : 'skyblue',
  justifyContent : 'center',
  
  
});

const MainGrid = styled(Box)({
  display : 'flex',
  backgroundColor : 'green',
  width : '70vw',
  heigth : '100vh',
  alignContent : 'center',
  justifyContent : 'center',


})

const MainPaper = styled(Box)({
  // marginTop : '10px',
  width : '100vw',
  height : '100vh',
  backgroundColor : 'gray',
  elevation : '3'
})

const MainText = styled(Typography)({
  color : 'white',
  fontSize : '20px'
})

/*
1. mui property - sx : js에서 style의 개념
*/



export const Main = () =>{

  return (
    <MainBack>
      <MainGrid>
        
        <ShuffleComponent/>
        
      </MainGrid>
    </MainBack>
  )
}