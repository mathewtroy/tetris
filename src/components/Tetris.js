// src/components/Tetris.js
import React, { Component } from 'react';

class Tetris extends Component {
  render() {
    return (
      <div className="board">
        <div className="border-out">
          <div className="border-in">

            <div className="score">Score: 0</div>

            <div className="start">
              <button  onClick={this.props.onClick}>Start/Pause</button>
            </div>

            <div className="container">
              <div className="frame">
                
                <div className="grid">
                  {Array.from(Array(200), (_, i) => (
                    <div key={i} className="grid-square"></div>
                  ))}
                </div>

                <div className="mini-grid">
                  {Array.from(Array(16), (_, i) => (
                    <div key={i} className="mini-grid-square"></div>
                  ))}
                </div>
                
              </div>
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
        </div>
      </div>
    );
  }
}

export default Tetris;
