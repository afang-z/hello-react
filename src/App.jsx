// 创建“外壳”组件APp

import React, {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


// 创建并暴露APP组件
export default  class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    state= {
        todos:[
            {id:'001', name:'吃饭', done:true},
            {id:'002', name:'睡觉', done:true},
            {id:'003', name:'玩游戏', done:false},
        ]
    }
    // 用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) =>{
        console.log('APp---', todoObj);
        // 获取原todos
        const {todos} = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({
            todos: newTodos
        })
    }
    // 更改
    updateTodo = (id, done) => {
        console.log('aopp--', id, done);
        const {todos} = this.state
        const newTodos = todos.map((item)=>{
            if(item.id === id) return {...item, done}
            else return item
        })
        this.setState({
            todos: newTodos
        })
    }
    // 删除
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((item)=> item.id !== id)
        this.setState({
            todos: newTodos
        })
    }
    checkAllTodo = (check) => {
        const { todos } = this.state
        const newTodos = todos.map((item)=>{
            return {...item, done:check}
        })
        this.setState({todos: newTodos})
    }
    //
    clearAllDone = () =>{
        const { todos } = this.state
        const newTodos = todos.filter(item=>!item.done)
        this.setState({todos: newTodos})
    }
    render(){
        const { todos } = this.state
        return(
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer  todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}