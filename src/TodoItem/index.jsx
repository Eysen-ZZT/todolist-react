import React, { Component } from 'react'
import './index.css'

export default class TodoItem extends Component {
  state = {
    mouse: false,
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    }
  }
  handleUpdate = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }
  handleDelete = (id) => {
    console.log(id);
    this.props.deleteTodo(id);
  }
  render() {
    const { id, todoname, done } = this.props;
    const { mouse } = this.state;
    return (
      <div className='item' style={{ background: mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <div className='col'>
          <label htmlFor={id}>
            <input id={id} type="checkbox" checked={done} onChange={this.handleUpdate(id)} />
            <span>{todoname}</span>
          </label>
        </div>
        <div className='col'>
          <button onClick={() => { this.handleDelete(id) }} style={{ display: mouse ? 'block' : 'none' }}>删除</button>
        </div>
      </div>
    )
  }
}
