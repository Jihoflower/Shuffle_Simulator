import React, { useEffect } from 'react'

import { Box } from '@mui/system'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../states/store/store'
import { PreCardComponent } from './PreCardComponent'
import { SufCardComponent } from './SufCardComponent'
import { Button } from '@mui/material'



//css
const ShuffleBox = styled(Box)({
  fontFamily : 'appleB',
  backgroundColor : 'transparent',
  width : '80vw',

})

const ShuffleCBox = styled(Box)({

  marginTop : '10vh',
  display : 'flex',
  justifyContent : 'space-around'
  
})

const PreCardSection = styled(PreCardComponent)({
  margin :'10px'
})

const SufCardSection = styled(SufCardComponent)({
  margin :'10px'
})

export const ShuffleComponent = () => {
  const changeTabNum = useSelector((state :RootState)=>state.changeTab);
  
  useEffect(()=>{
 

  })

  const transFormWord = (number : Number)=>{
    switch(number){
      case 0 :
        return "일반 셔플"
      case 1 :
        return "프리미엄 셔플"
      case 2 :
        return "이벤트 프셔"
      default :
        break;
    }
  }

  return (
    <ShuffleBox>
      <ShuffleCBox>
      {/* {transFormWord(changeTabNum.number)} 페이지 */}
      <PreCardSection/>
      <Box>
        <Button>dddd</Button>
      </Box>
      <SufCardSection/>    
      </ShuffleCBox>
    </ShuffleBox>
  )
}
