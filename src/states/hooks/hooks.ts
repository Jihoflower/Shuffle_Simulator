// typescript의 type을 지정하기 위해 hooks로 store로 부터 store states type 과 dispatch type을 반환하도록 설정

import {TypedUseSelectorHook,useDispatch , useSelector} from 'react-redux'
import type { RootState , AppDispatch } from '../store/store'

export const useAppDispatch = () =>{
    useDispatch<AppDispatch>();
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;