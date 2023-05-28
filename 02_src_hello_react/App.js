// 创建“外壳”组件APp

import React, {Component} from 'react'
import Hello from './components/Hello'
import Welcom from './components/Welcome'

// 创建并暴露APP组件
export default  class App extends Component {
    render(){
        return(
            <div>
                <Hello />
                <Welcom />
            </div>
        )
    }
}