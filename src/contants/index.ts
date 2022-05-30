export const ADD ='ADD';
//定义CounterState类型--属性接口
export interface CounterStateType{
    count:number
}
//定义CounterAction类型--属性接口
export interface CounterActionType{
    type:typeof ADD
}