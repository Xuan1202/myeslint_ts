/** @format */ import React from 'react'
import Child from './Child'
import Hello from './Hello'
interface State {
    count: number
}
class App extends React.Component<unknown, State> {
    state = {count: 0}
    render() {
        const {count} = this.state
        return (
            <div>
                <p>{count}</p>
                <button onClick={this.handleClick}>+</button>
                <hr />
                <h3>子组件Child</h3>
                <Child msg="测试哈哈" />
                <hr />
                <Hello />
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
}
export default App
