import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/system/Unstable_Grid/Grid';
import {NavTab} from './NavTab';


//ts 는 처음 레터를 대문자로 해야 읽음

// css 
import styled from 'styled-components';
import '../assets/fonts/font.css';
import { Tabs, Typography } from '@mui/material';

// display-flex 를 주고 align - 수평 / jusify - 수직

const NavMain = styled(Grid)({
    backgroundColor : '#303030',
    width : '100vw',
    height : '6vh',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
})

const NavTypo = styled(Typography)({
    fontFamily : 'appleEB',
    color : 'white',
    fontSize : '18px',
    letterSpacing : '-1px',
    whiteSpace : 'pre-line',

   
})

const NavTool = styled(Tabs)({
    fontFamily : 'appleSB',
    color :'white',
})

const ContentTypo = styled(Typography)({
    fontFamily : 'appleSB',
    color : 'white',
    fontSize : '16px',
    letterSpacing : '-1px'
})



export const Nav = () => {
  return (
    <div>
        <NavMain>
            <NavTab/>            
        </NavMain>
    </div>
  )
}
