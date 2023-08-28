import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Tab, TableContainer, Tabs  } from '@mui/material';
import { useDispatch , useSelector } from 'react-redux';
import  {changeTabActions, tabIndexSelector}  from '../states/store/changeTabSlice';


//css
import styled from '@emotion/styled';
import { RootState } from '../states/store/store';

const ContentTabBox = styled(Tabs)({
  fontFamily : 'appleSB',
})

const ContentTab = styled(Tab)({
  fontFamily : 'appleSB',
  color : 'white'
})

export const NavTab =()=> {
    const changeTabNum = useSelector((tabIndexSelector));

    useEffect(()=>{
      
    },[useSelector((tabIndexSelector))])

    const dispatch = useDispatch();

    //ts라서 변수에 타입 지정해 주어야함 (js 와 다름 주의)
    const handleChange = (event : SyntheticEvent , newValue : number) =>{
        dispatch(changeTabActions.changeTab(newValue));
    }


  return (

      <ContentTabBox value={changeTabNum} onChange={handleChange}>
        <ContentTab label= "일반 셔플" value={0}/>
        <ContentTab label= "프리미엄 셔플" value={1}/>
        <ContentTab label= "셔플 관련 이벤트" value={2} />
      </ContentTabBox> 


     

  )
}
