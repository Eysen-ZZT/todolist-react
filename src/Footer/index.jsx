import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='col'>
          <input type="checkbox" name="" id="" />
          <span>已完成0 / 全部2</span>
        </div>
        <div className='col'>
          <button>清除已完成内容</button>
        </div>
      </div>
    )
  }
}
