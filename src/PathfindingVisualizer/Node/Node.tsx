import React, { Component } from 'react';
import './Node.css';

export default class Node extends Component {
  render() {
    // @ts-ignore
    const { isFinish, isStart } = this.props;
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : '';

    return <div className={`node ${extraClassName}`}></div>;
  }
}

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
