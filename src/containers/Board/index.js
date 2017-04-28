import React, { Component } from 'react';
import './index.css';

import Fret from '../Fret'
import Toolbox from '../../components/Toolbox'


class Board extends Component {
  constructor() {
    super();
    this.state = {
      colourSet: ['#123412', '#432411']
    }

    this.colourExistingNotes = this.colourExistingNotes.bind(this);
  }
  render() {
    return (
      <div className="Board">

        <Fret settedNotes={this.props.settedNotes}
              setDataNote={this.props.setNote}
              removeNote={this.props.unsetNote}
              colorSet={this.state.colourSet}/>

            <Toolbox setAllNotes={this.props.setAllNotes}
                 restartBoard={this.props.unsetAllNotes}
                 invertNotes={this.props.setInversions}
                 removeStringNote={this.props.removeStringNotes}
                 removeFrets={this.props.removeFretsFrom}
                 colourNotes={this.colourExistingNotes}
                 eraseBoard={this.props.removeThisBoard}></Toolbox>

      </div>
    );
  }

  componentDidMount() {
    this.setState({...this.state, settedNotes: this.props.showNotes + ' '});
  }

  removeFrom(valueFrom, valueTo) {
    let toValue = valueTo;

    if (valueFrom > valueTo) {
      valueTo = valueFrom;
      valueFrom = toValue;
    }

    var fretNotes = [['E1', 'B2', 'G3', 'D4', 'A5', 'E6'],
                     ['F1', 'C2', 'G#3', 'D#4', 'A#5', 'F6'],
                     ['F#1', 'C#2', 'A3', 'E4', 'B5', 'F#6'],
                     ['G1', 'D2', 'A#3', 'F4', 'C5', 'G6'],
                     ['G#1', 'D#2', 'B3', 'F#4', 'C#5', 'G#6'],
                     ['A1', 'E2', 'C3', 'G4', 'D5', 'A6'],
                     ['A#1', 'F2', 'C#3', 'G#4', 'D#5', 'A#6'],
                     ['B1', 'F#2', 'D3', 'A4', 'E5', 'B6'],
                     ['C1', 'G2', 'D#3', 'A#4', 'F5', 'C6'],
                     ['C#1', 'G#2', 'E3', 'B4', 'F#5', 'C#6'],
                     ['D1', 'A2', 'F3', 'C4', 'G5', 'D6'],
                     ['D#1', 'A#2', 'F#3', 'C#4', 'G#5', 'D#6']]

    var notesToRemove = ''

    for (var i = parseInt(valueFrom, 10); i <= parseInt(valueTo, 10); i++) {
      for (var z = 0; z <= 5; z++) {
        if (z === 5) {
          notesToRemove += fretNotes[i][z];
        }
        else {
          notesToRemove += fretNotes[i][z] + ' ';
        }
      }
    }

    var cleanState = '';

    for (var x = 0; x < this.state.settedNotes.split(' ').length; x++) {
      if (notesToRemove.includes(this.state.settedNotes.split(' ')[x]) !== true) {
        cleanState += this.state.settedNotes.split(' ')[x] + ' ';
      }
    }

    this.setState({settedNotes: cleanState});
  }

  colourExistingNotes(id) {
    console.log('hola');
    document.getElementById(id).style.backgroundColor = this.state.colourSet[0];
  }
}

export default Board;
