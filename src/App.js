import React, { Component } from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import './App.css';
export default class App extends Component {
  state = {
    todos: [
      { id: '001', todoname: '吃饭', done: true },
      { id: '002', todoname: '睡觉', done: false },
      { id: '003', todoname: '打游戏', done: false },
    ]
  }
  addTodo = (todoObj) => {
    const { todos } = this.state;
    this.setState({
      todos: [todoObj, ...todos]
    })
  }
  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
        <Footer />
      </div>
    )
  }
}