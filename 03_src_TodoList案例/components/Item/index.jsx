import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
           this.setState({
            mouse: flag
           })
        }
    }
    // 勾选或取消勾选
    handleCheck = (id) =>{
        return (event)=>{
            console.log(id, event.target.checked);
            this.props.updateTodo(id, event.target.checked)
        }
    }
    handleDelete = (id) =>{
        if (window.confirm('你确定删除吗')) {
            this.props.deleteTodo(id)
        }
    }
    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                    <span>{ name }</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse?'block':'none' }} onClick={()=>this.handleDelete(id)}>
                    删除
                </button>
            </li>
        )
    }
}
