import React, { useEffect } from 'react'

import { Box, Stack, fontFamily } from '@mui/system'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../states/store/store'
import { PreCardComponent } from './PreCardComponent'
import { SufCardComponent } from './SufCardComponent'
import { Button } from '@mui/material'

import  {changeOption, changeOptionInit}  from '../states/store/optionSlice';
import '../assets/tempDb';
import { gatCha } from '../assets/weightRandom'
import { TNOptions,TPOptions,TBOptions, ANOptions, DNOptions, APOptions ,ABOptions , DPOptions , DBOptions } from '../assets/tempDb'
import { increaseCount , initialCount } from '../states/store/clickCountSlice'
import { sufChangeOption, sufChangeOptionInit } from '../states/store/sufOptionSlice'
import { red } from '@mui/material/colors'
import { changeOptionInitValue, changeOptionValue } from '../states/store/cardOptionSlice'
import { ComboComponent } from './ComboComponent'



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

let DB_OPTION : Object[] = [];

export const ShuffleComponent = () => {

  const OPTION_STATE = useSelector((state :RootState)=>state.changeOption).options; // 옵션 상태
  const CLICK_COUNT = useSelector((state :RootState)=>state.increaseCount).number;  // 사용 횟수
  const MENU_INDEX = useSelector((state :RootState)=>state.changeTab).number;       // 메뉴 인덱스
  const CARD_OPTION_VALUE = useSelector((state :RootState)=>state.changeOptionValue).optionValue; // 공/수/재 구분
  const dispatch = useDispatch();
  let SHUFFLE_PRICE = 0;
  let SHUFFLE_NAME = "";
  
  let LOCK_FLAG = false;


  useEffect(()=>{
    console.log("useEffect On")
    windowSetting(MENU_INDEX);
    optionValueSetting(CARD_OPTION_VALUE,MENU_INDEX);
    dispatch(changeOptionInit()); // 우측 초기화
    dispatch(sufChangeOptionInit()); // 좌측 초기화
    console.log(SHUFFLE_NAME+"|"+SHUFFLE_PRICE);
  },[MENU_INDEX , CARD_OPTION_VALUE])

  const changFlag = ()=>{
    // if(changeOptionList.options.opt1 == changeOptionList.options.opt2 || changeOptionList.options.opt1 == changeOptionList.options.opt3 || changeOptionList.options.opt3 == changeOptionList.options.opt2){
    //   alert("동일 옵션 두줄");

    // }
    if(OPTION_STATE.opt1 == OPTION_STATE.opt2 && OPTION_STATE.opt2 == OPTION_STATE.opt3){
      alert("동일 옵션 세줄");
    }

    return true;
  }

  const handleClick=()=>{
    console.log("handleClick on");
    if(!changFlag()){
      return false;
    }
    const PRE_OPTION_STATE = OPTION_STATE;
    console.log("DB_OPTION : "+DB_OPTION[0]);
    changeData(gatCha(DB_OPTION , MENU_INDEX , LOCK_FLAG));
    dispatch(sufChangeOption(PRE_OPTION_STATE))
    dispatch(increaseCount());


      
  }

  const changeData =(newTemp : object)=>{
    let tempOptions ={
      opt1 : "" as string,
      opt2 : "" as string,
      opt3 : "" as string
    }

    console.log(newTemp);

    if(false){
      for(let i = 0 ; i < 3 ; i++){
          tempOptions.opt1 = OPTION_STATE.opt1;
          tempOptions.opt2 = Object.values(newTemp)[0].name;
          tempOptions.opt3 = Object.values(newTemp)[1].name;
      }
    }
    else if(true){
        tempOptions.opt1 = Object.values(newTemp)[0].name;
        tempOptions.opt2 = Object.values(newTemp)[1].name;
        tempOptions.opt3 = Object.values(newTemp)[2].name;
    }
    dispatch(changeOption(tempOptions));
    
  }

  //메뉴 인덱스에 따른 세팅
  const windowSetting = (tabIndex : number) =>{
    // 클릭카운트 초기화
    dispatch(initialCount());
    // 가격 기준 초기화
    if(tabIndex === 0){
      SHUFFLE_PRICE = 600;
      SHUFFLE_NAME = "일반 셔플";
    }
    else if(tabIndex === 1){
      SHUFFLE_PRICE = 1200;
      SHUFFLE_NAME = "프리미엄 셔플";
    }
    else if(tabIndex === 2){
      SHUFFLE_PRICE = 600;
      SHUFFLE_NAME = "버닝 셔플";
    }
  }

  //카드 종류에 따른 세팅
  const optionValueSetting = (optionValue : string , tabIndex : number)=>{
    switch (tabIndex){
      case 0 :
        if(optionValue === "A"){
          DB_OPTION = ANOptions;
        }
        else if(optionValue === "D"){
          DB_OPTION = DNOptions;
        }
        else if(optionValue === "T"){
          DB_OPTION = TNOptions;
        }
        break;

      case 1 :
        if(optionValue === "A"){
          DB_OPTION = APOptions;
        }
        else if(optionValue === "D"){
          DB_OPTION = DPOptions;
        }
        else if(optionValue === "T"){
          DB_OPTION = TPOptions;
        }
        break;

      case 2 :
        if(optionValue === "A"){
          DB_OPTION = ABOptions;
        }
        else if(optionValue === "D"){
          DB_OPTION = DBOptions;
        }
        else if(optionValue === "T"){
          DB_OPTION = TBOptions;
        }
        break;
    }
  }

  // const cardOptionValueSetting = ()=>{
  //   dispatch(changeOptionValue())
  // switch (cardOptionValue){
  //   case "A":
  //     break;
  //   case "B":
  //     break;
  //   case "T":

  //     break;
  // }
  // }

  

  return (
    <ShuffleBox>
      <div>
      <P> {SHUFFLE_NAME} </P>
      <P>사용갯수 : {CLICK_COUNT} </P>
      <P>금액 : {CLICK_COUNT * SHUFFLE_PRICE}</P>
      <ComboComponent/>
      </div>
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
      <Box bgcolor={red}>
        
      </Box >
    </ShuffleBox>
  )
}
