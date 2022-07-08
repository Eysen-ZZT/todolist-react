import React, { Component } from 'react'
import './index.css'

export default class TodoItem extends Component {
  render() {
    const { todoname, done } = this.props;
    return (
      <div className='item'>
        <div className='col'>
          <input type="checkbox" defaultChecked={done}/>
          <span>{todoname}</span>
        </div>
        <div className='col'>
          <button>删除</button>
        </div>
      </div>
    )
  }
}
