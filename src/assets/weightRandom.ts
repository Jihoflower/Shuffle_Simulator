//가중치 랜덤 알고리즘
/*
1. 해당하는 가중치들을 오름차순 정렬하여 가로로 놓는다고 생각
ex ) A - 20% , B - 30 % , C - 50 %

2. ㅁㅁ/ㅁㅁㅁ/ㅁㅁㅁㅁㅁ 로 정렬된 배열이 있고 Math.random 으로 0~100 사이의 숫자를 임의로 지정

3. Math.random으로 정해진 숫자가 가중치 로 정렬된 배열의 값게 포함되어 있는 가중치의 확률로 등장
ex ) Math.random = 37 이면
      | <- 이쪽에 있게 되므로 B당첨 (각각 당첨될 확률은 지정한 가중치에 수렴함)
ㅁㅁ/ㅁㅁㅁ/ㅁㅁㅁㅁㅁ
*/

import { keys } from '@mui/system';





export const gatCha =(tempDb : object , menuIndex : number , lockFlag : boolean)=>{

    // 선택 값 설정하기   
    let count = 0;
    let acc = 0;
    let newTemp: Object[] = [];
    let weightFlag = true; 

    //잠금 Flag / true - 사용 false - 미사용
    if(lockFlag == true){
        randdomShuffleLock(count , acc , tempDb , newTemp , weightFlag);
    }
    else{
        randomShuffle(count , acc , tempDb , newTemp);
    }
    
    return newTemp;
}

const randomShuffle =(count : number ,acc : number, tempDb :Object , newTemp : Array<Object>)=>{
    while(count < 3){
        // 객체 안에 있는 가중치 값 가져오기
        let pointNum = Math.random() *100;
            for(let value of Object.values(tempDb)){
                acc += value.percent
                if(pointNum <= acc){
                    
                    newTemp.push(value);
                    acc = 0;
                    break;
                }
            }               
            count++;
            
        }
    return newTemp;
}


const randdomShuffleLock =(count : number ,acc : number, tempDb :Object , newTemp : Array<Object> , weightFlag : boolean)=>{
    while(count < 2){
        // 객체 안에 있는 가중치 값 가져오기
        let pointNum = Math.random() *100;
            for(let value of Object.values(tempDb) ){
                if(weightFlag == true){
                    let percentTemp = 0;
                    if(value.name !== "3점슛성공률상승"){
                        percentTemp = (value.percent + (3.2*0.8/28)) ;
                        acc += percentTemp
                    }
                    else if(value.name === "3점슛성공률상승"){
                        percentTemp = (value.percent*0.2) ;
                        acc += (value.percent*0.2) ;
                    }
                    if(pointNum <= acc || acc > 100){
                        newTemp.push(value);
                        acc = 0;
                        break;
                    }
                }
                else if(weightFlag == false){
                    acc += value.percent;
                    if(pointNum <= acc){
                        newTemp.push(value);
                        acc = 0;
                        break;
                    }
                }
        }  
            weightFlag = false;
            console.log(count);
            count++;
        }
}