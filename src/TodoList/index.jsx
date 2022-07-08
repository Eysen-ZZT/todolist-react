import React, { Component } from 'react';
import TodoItem from '../TodoItem'
import './index.css';

export default class TodoList extends Component {
  render() {
    return (
      <div className='list'>
        {
          this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} />
          })
        }
      </div>
    )
  }
}
