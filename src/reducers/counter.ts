import {ADD , CounterStateType ,CounterActionType} from '../contants'

export const counter=(state:CounterStateType={count:0},action:CounterActionType)=>{
    switch (action.type) {
        case ADD:
            return {count:state.count+1}    
        default:
            return state;
    }
}