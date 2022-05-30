import React,{Component} from 'react';

interface IProps{
    msg:string;
}
interface IState{
    name:string;
}
class Child extends React.Component<IProps,IState>{
    state={name:"tom"}
    render(){
        let {name}=this.state;
        let {msg} =this.props;
        return(
            <div>
                <p>父组件给子组件传递的值：{msg}</p>
                <p>{name}</p>
                <button onClick={this.changeName}>点击更换name</button>
            </div>
        )
    }
    changeName=()=>{
        this.setState({
            name:"jarry"
        })
    }
}
export default Child;