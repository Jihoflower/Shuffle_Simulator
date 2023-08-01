import React, { useEffect } from 'react'

import { Box } from '@mui/system'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../states/store/store'

//css
const ShuffleBox = styled(Box)({
  fontFamily : 'appleB',

})

const ShuffleCBox = styled(Box)({
  backgroundColor : 'white',
  marginTop : '10vh',
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
      {transFormWord(changeTabNum.number)} 페이지
      </ShuffleCBox>
    </ShuffleBox>
  )
}
