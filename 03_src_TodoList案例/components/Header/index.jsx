import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './Header.css'

export default class Header extends Component {
    // 对接口的props进行： 类型，必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp=(event)=>{
        const { target, keyCode} = event
        if (keyCode!==13) return 
        if (target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        console.log(event.target.value);
        const todoObj = {
            id: nanoid(), // 生成唯一id
            name: target.value,
            done: false
        }
        this.props.addTodo(todoObj)
        target.value = ''
    }
  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type="text" name="" id="" />
      </div>
    )
  }
}
