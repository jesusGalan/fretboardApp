import React, { Component } from 'react';
import './App.css';

import Board from './containers/Board'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Board showNotes="G4 A4 B3 D3 E2 G2"></Board>
        <Board showNotes="G3 A3 B2 D2 E1 G1"></Board>
      </div>
    );
  }
}

export default App;
