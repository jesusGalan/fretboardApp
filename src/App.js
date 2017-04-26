import React, { Component } from 'react';
import './App.css';

import Fret from './containers/Fret'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Fret showNotes="G4 A4 B3 D3 E2 G2"/>
          <Fret></Fret>
      </div>
    );
  }
}

export default App;
