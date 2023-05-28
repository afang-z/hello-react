import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAll = () =>{
        this.props.clearAllDone()
    }
    render() {
        const { todos } = this.props
        // 已完成的个数
        const doneCount = todos.reduce((preItem, item)=>{
            return preItem + (item.done?1:0)
        }, 0)
        // 总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label htmlFor="">
                    <input type="checkbox" checked={total===doneCount && total!==0 ? true : false} onChange={this.handleCheckAll}  />
                </label>
                <span>
                    <span>已完成{ doneCount }</span>/ 全部{ total }
                </span>
                <button onClick = {this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
