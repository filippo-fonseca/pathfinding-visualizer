import React, { Component } from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    // @ts-ignore
    const {
      // @ts-ignore
      col,
      // @ts-ignore
      isFinish,
      // @ts-ignore
      isStart,
      // @ts-ignore
      isWall,
      // @ts-ignore
      onMouseDown,
      // @ts-ignore
      onMouseEnter,
      // @ts-ignore
      onMouseUp,
      // @ts-ignore
      row,
    } = this.props;
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}
