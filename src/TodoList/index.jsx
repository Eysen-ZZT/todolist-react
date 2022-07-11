import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './index.css';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className='list'>
        {
          this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />
          })
        }
      </div>
    )
  }
}
