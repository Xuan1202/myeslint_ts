import {combineReducers} from 'redux';
import { counter } from './counter';

export const rootReducer = combineReducers({
    counter
})

//定义state类型可以出现的属性
export type StoreState =ReturnType<typeof rootReducer>;