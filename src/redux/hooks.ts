import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch,RootState} from '../redux/store'

//Change the state
export const useAppDispatch = ()=> useDispatch<AppDispatch>

//Access the state 
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector