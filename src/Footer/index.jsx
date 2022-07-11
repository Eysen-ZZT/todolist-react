import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkedAll: PropTypes.func.isRequired,
    deleteChecked: PropTypes.func.isRequired
  }
  handleCheck = (checked) => {
    return () => {
      this.props.checkedAll(checked);
    }
  }
  handleDeleteChecked = () => {
    this.props.deleteChecked();
  }
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
    const total = todos.length;
    const checked = doneCount === total;
    return (
      <div className='footer'>
        <div className='col'>
          <input type="checkbox" checked={checked} onChange={this.handleCheck(checked)} />
          <span>已完成{doneCount} / 全部{total}</span>
        </div>
        <div className='col'>
          <button onClick={this.handleDeleteChecked}>清除已完成内容</button>
        </div>
      </div>
    )
  }
}
