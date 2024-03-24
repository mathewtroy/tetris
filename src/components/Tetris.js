// src/components/Tetris.js
import React, { Component } from 'react';
import Grid from './Grid';
import MiniGrid from './MiniGrid';

class Tetris extends Component {
  render() {
    return (
      <div className="board">
        
        <div className="score">Score: 0</div>

        <button className="start" onClick={this.props.onClick}>
          Start/Pause
        </button>

        <div className="container">
          <Grid />
          <MiniGrid />
        </div>
        <div className="buttons">
        <button id="change-btn">Change</button>
              <div class="bottom">
                <button id="left-btn">Left</button>
                <button id="down-btn">Down</button>
                <button id="right-btn">Right</button>
              </div>
        </div>
      </div>
    );
  }
}

export default Tetris;
