import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') {
      alert('输入内容为空！');
      return;
    };
    const todoObj = {
      id: nanoid(),
      todoname: target.value,
      done: false,
    }
    this.props.addTodo(todoObj);
    target.value = '';
  }
  render() {
    return (
      <div className='add'>
        <input type='text' onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车确认' />
      </div>
    )
  }
}
