import * as React from 'react';
import {useState} from 'react';
interface State{
    count?:number;
}
const Hello:React.FC<State>=()=>{
    let [count,setCount] =useState(0)
    return(
        <div>
            <h3>Hello组件</h3>
            <p>{count}</p>
            <button onClick={()=>setCount(count+2)}>+</button>
        </div>
    )
}
export default Hello;