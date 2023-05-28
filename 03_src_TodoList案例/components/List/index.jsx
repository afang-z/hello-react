import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/index'
import './list.css'

export default class List extends Component {
        // 对接口的props进行： 类型，必要性的限制
        static propTypes = {
            todos: PropTypes.array.isRequired,
            updateTodo: PropTypes.func.isRequired,
            deleteTodo: PropTypes.func.isRequired
        }
    render() {
        const {todos, updateTodo, deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((item)=>{
                        // info=
                      return  <Item key={item.id}  {...item} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
