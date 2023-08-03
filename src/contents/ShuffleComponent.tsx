import React, { useEffect } from 'react'

import { Box, Stack, fontFamily } from '@mui/system'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../states/store/store'
import { PreCardComponent } from './PreCardComponent'
import { SufCardComponent } from './SufCardComponent'
import { Button } from '@mui/material'

import  {changeOption}  from '../states/store/optionSlice';
import '../assets/tempDb';
import { gatCha } from '../assets/weightRandom'
import { optionsList } from '../assets/tempDb'
import { changeClickCount } from '../states/store/clickCountSlice'
import { sufChangeOption } from '../states/store/sufOptionSlice'



//css
const ShuffleBox = styled(Box)({
  fontFamily : 'appleB',
  backgroundColor : 'transparent',
  width : '90vw',

})

const ShuffleCBox = styled(Box)({

  marginTop : '10vh',
  display : 'flex',
  justifyContent : 'space-evenly'
  
})

const PreCardSection = styled(PreCardComponent)({
  margin :'10px'
})

const SufCardSection = styled(SufCardComponent)({
  margin :'10px'
})

const Button1 = styled(Button)({

  
})

const P = styled('span')({
  fontFamily : 'appleEB'
})

export const ShuffleComponent = () => {

  const changeOptionList = useSelector((state :RootState)=>state.changeOption);
  const clickCount = useSelector((state :RootState)=>state.clickCount);
  const dispatch = useDispatch();


  useEffect(()=>{
  },[clickCount])

  const changFlag = ()=>{
    // if(changeOptionList.options.opt1 == changeOptionList.options.opt2 || changeOptionList.options.opt1 == changeOptionList.options.opt3 || changeOptionList.options.opt3 == changeOptionList.options.opt2){
    //   alert("동일 옵션 두줄");

    // }
    if(changeOptionList.options.opt1 == changeOptionList.options.opt2 && changeOptionList.options.opt2 == changeOptionList.options.opt3){
      alert("동일 옵션 세줄");
  
    }

    return true;
  }

  const handleClick=()=>{
    console.log("handleClick on");
    console.log(clickCount.number);
    if(!changFlag()){
      return false;
    }
    const tempOptions = changeOptionList;
    
    changeData(gatCha(optionsList));
    dispatch(sufChangeOption(tempOptions.options))
    dispatch(changeClickCount());
      
  }

  const changeData =(newTemp : object)=>{
    let tempOptions ={
      opt1 : "" as string,
      opt2 : "" as string,
      opt3 : "" as string
    }
    for(let i = 0 ; i < 3 ; i++){
        tempOptions.opt1 = Object.values(newTemp)[0].name;
        tempOptions.opt2 = Object.values(newTemp)[1].name;
        tempOptions.opt3 = Object.values(newTemp)[2].name;
    }
    console.log(tempOptions);
    dispatch(changeOption(tempOptions));
    
  }


  return (
    <ShuffleBox>
      <P>사용갯수 : {clickCount.number} </P>
      <P>금액 : {clickCount.number * 600}</P>
      <ShuffleCBox>
      {/* {transFormWord(changeTabNum.number)} 페이지 */}
      <PreCardSection/>
      
      <Box>
        <Stack width={100}>      
          <Button variant='contained' color='error' onClick={handleClick}>
            <P>사용하기</P>
          </Button>
        </Stack>
      </Box>
      <SufCardSection/>    
      </ShuffleCBox>
    </ShuffleBox>
  )
}
