// src/App.js
import React, { Component } from 'react';
import './css/style.css';
import Tetris from './components/Tetris';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tetris />
      </div>
    );
  }
}

export default App;
