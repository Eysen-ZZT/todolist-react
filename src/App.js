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
  updateTodo = (id, done) => {
    const { todos } = this.state;
    todos.forEach((todoObj) => {
      if (todoObj.id === id) {
        todoObj.done = done
      }
    });
    /* const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return { ...todoObj, done };
      return todoObj;
    }); */
    this.setState({ todos });
  }
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todoObj => todoObj.id !== id);
    this.setState({ todos: newTodos });
  }
  checkedAll = (checked) => {
    const { todos } = this.state;
    const newTodos = todos.map(todoObj => ({ ...todoObj, done: !checked }));
    this.setState({ todos: newTodos });
  }
  deleteChecked = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todoObj => !todoObj.done);
    this.setState({ todos: newTodos });
  }
  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={this.state.todos} checkedAll={this.checkedAll} deleteChecked={this.deleteChecked} />
      </div>
    )
  }
}