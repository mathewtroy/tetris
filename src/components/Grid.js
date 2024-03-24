// src/components/Grid.js
import React, { Component } from 'react';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        {Array.from(Array(200), (_, i) => (
          <div key={i} className="grid-square"></div>
        ))}
      </div>
    );
  }
}

export default Grid;
