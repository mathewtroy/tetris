// src/components/MiniGrid.js
import React, { Component } from 'react';

class MiniGrid extends Component {
  render() {
    return (
      <div className="mini-grid">
        {Array.from(Array(16), (_, i) => (
          <div key={i} className="mini-grid-square"></div>
        ))}
      </div>
    );
  }
}

export default MiniGrid;
