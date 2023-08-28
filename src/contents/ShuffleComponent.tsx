import { Box, Stack } from "@mui/system"
import styled from "styled-components"
import { PreCardComponent } from "./PreCardComponent"
import { SufCardComponent } from "./SufCardComponent"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { optionActions, optionsSelector } from "../states/store/optionSlice"
import { clickActions, clickCountSelector } from "../states/store/clickCountSlice"
import { tabIndexSelector } from "../states/store/changeTabSlice"
import { cardOptionSelector } from "../states/store/cardOptionSlice"
import { sufChangeActions, sufChangeSelector } from "../states/store/sufOptionSlice"
import { useEffect } from "react"
import { gatCha } from "../assets/weightRandom"
import { ABOptions, ANOptions, APOptions, DBOptions, DNOptions, DPOptions, TBOptions, TNOptions, TPOptions } from "../assets/tempDb"
import { ComboComponent } from "./ComboComponent"
import { red } from "@mui/material/colors"




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
  // dispatch 가 두번 호출 되는 이유 useSelector는 렌더링을 발생시킴 / createSelector로 바꾸어야함

  
  // const OPTION_STATE = useSelector((state :RootState)=>state.changeOption).options; // 옵션 상태
  const OPTION_STATE = useSelector(optionsSelector); // createSelector 사용해서 변경
  const CLICK_COUNT = useSelector(clickCountSelector);  // 사용 횟수
  const MENU_INDEX = useSelector(tabIndexSelector);       // 메뉴 인덱스
  const CARD_OPTION_VALUE = useSelector(cardOptionSelector); // 공/수/재 구분
  const SUF_OPTION = useSelector(sufChangeSelector);
  const dispatch = useDispatch();
  let SHUFFLE_PRICE = 0;
  let SHUFFLE_NAME = "";
  
  let LOCK_FLAG = false;


  useEffect(()=>{
    console.log("useEffect On")
    windowSetting(MENU_INDEX);
    optionValueSetting(CARD_OPTION_VALUE,MENU_INDEX);
    dispatch(optionActions.changeOptionInit()); // 우측 초기화
    dispatch(sufChangeActions.sufChangeOptionInit()); // 좌측 초기화
    console.log(SHUFFLE_NAME+"|"+SHUFFLE_PRICE);
  },[MENU_INDEX , CARD_OPTION_VALUE])

  const changFlag = ()=>{
    // if(changeOptionList.options.opt1 == changeOptionList.options.opt2 || changeOptionList.options.opt1 == changeOptionList.options.opt3 || changeOptionList.options.opt3 == changeOptionList.options.opt2){
    //   alert("동일 옵션 두줄");

    // }
    if(OPTION_STATE[0].opt == OPTION_STATE[1].opt && OPTION_STATE[1].opt == OPTION_STATE[2].opt){
      alert("동일 옵션 세줄");
    }

    return true;
  }

  const handleClick=()=>{
    console.log("handleClick on");
    //temp("a","b","c",{a:"d"});
    if(!changFlag()){
      return false;
    }
    const PRE_OPTION_STATE = OPTION_STATE;
    changeData(gatCha(DB_OPTION , MENU_INDEX , LOCK_FLAG));
    dispatch(sufChangeActions.sufChangeOption(PRE_OPTION_STATE))
    dispatch(clickActions.increaseCount());

  }

  const temp =(...args: any[])=>{
    console.log(args);
    for(let i = 0 ; i < args.length ; i++){
      console.log(args[i]);
    }
  }

  const changeData =(newTemp : object)=>{

    let preTempOptions = [
      {opt : OPTION_STATE[0].opt as string , flag : OPTION_STATE[0].flag as boolean}, 
      {opt : OPTION_STATE[1].opt as string , flag : OPTION_STATE[1].flag as boolean}, 
      {opt : OPTION_STATE[2].opt as string , flag : OPTION_STATE[2].flag as boolean}, 
    ]
    let tempOptions = [...preTempOptions];

    if(false){
      // for(let i = 0 ; i < 3 ; i++){
      //     tempOptions.opt1 = OPTION_STATE.opt1;
      //     tempOptions.opt2 = Object.values(newTemp)[0].name;
      //     tempOptions.opt3 = Object.values(newTemp)[1].name;
      // }
    }
    else if(true){
        tempOptions[0].opt = Object.values(newTemp)[0].name;
        tempOptions[1].opt = Object.values(newTemp)[1].name;
        tempOptions[2].opt = Object.values(newTemp)[2].name;
    }
    dispatch(optionActions.changeOption(tempOptions));
    
  }

  //메뉴 인덱스에 따른 세팅
  const windowSetting = (tabIndex : number) =>{
    // 클릭카운트 초기화
    dispatch(clickActions.initialCount());
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
