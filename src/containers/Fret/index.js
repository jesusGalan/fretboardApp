import React, { Component } from 'react';
import './index.css';

import Fretguide from '../../components/Fretguide'
import Firststring from '../../components/Firststring'
import Secondstring from '../../components/Secondstring'
import Thirdstring from '../../components/Thirdstring'
import Fourthstring from '../../components/Fourthstring'
import Fifthstring from '../../components/Fifthstring'
import Sixthstring from '../../components/Sixthstring'

import Toolbox from '../../components/Toolbox'


class Fret extends Component {
  constructor() {
    super();
    this.state = {
      settedNotes: ""
    }

    this.setDataNote = this.setDataNote.bind(this);
    this.unsetNote = this.unsetNote.bind(this);
    this.setAll = this.setAll.bind(this);
    this.setInversions = this.setInversions.bind(this);
    this.unsetAllNotes = this.unsetAllNotes.bind(this);
    this.removeStringNotes = this.removeStringNotes.bind(this);
    this.removeFrom = this.removeFrom.bind(this);
  }
  render() {
    return (
      <div className="Fret">

        <div className="fret-wrapper">

          <Fretguide/>

          <Firststring data={this.state.settedNotes}
                       setNote={this.setDataNote}
                       removeNote={this.unsetNote}/>

          <Secondstring data={this.state.settedNotes}
                       setNote={this.setDataNote}
                       removeNote={this.unsetNote}/>

          <Thirdstring data={this.state.settedNotes}
                       setNote={this.setDataNote}
                       removeNote={this.unsetNote}/>

          <Fourthstring data={this.state.settedNotes}
                       setNote={this.setDataNote}
                       removeNote={this.unsetNote}/>

          <Fifthstring data={this.state.settedNotes}
                       setNote={this.setDataNote}
                       removeNote={this.unsetNote}/>

          <Sixthstring data={this.state.settedNotes}
                       setNote={this.setDataNote}
                       removeNote={this.unsetNote}/>

        </div>

        <Toolbox setAllNotes={this.setAll}
                 restartBoard={this.unsetAllNotes}
                 invertNotes={this.setInversions}
                 removeStringNote={this.removeStringNotes}
                 removeFrets={this.removeFrom}></Toolbox>

      </div>
    );
  }

  componentDidMount() {
    this.setState({...this.state, settedNotes: this.props.showNotes + ' '});
  }

  setDataNote(note) {
    if (this.state.settedNotes.includes(note) !== true){
      this.setState({...this.state, settedNotes: (this.state.settedNotes + ' ' + note + ' ').replace('  ', ' ')});
    }
    console.log(this.state.settedNotes);
  }

  unsetNote(note) {
    this.setState({...this.state, settedNotes: this.state.settedNotes.replace(note + ' ', '')});
  }

  setAll() {
    this.setState({settedNotes: 'E1 F1 F#1 G1 G#1 A1 A#1 B1 C1 C#1 D1 D#1 ' +
                                'B2 C2 C#2 D2 D#2 E2 F2 F#2 G2 G#2 A2 A#2 ' +
                                'G3 G#3 A3 A#3 B3 C3 C#3 D3 D#3 E3 F3 F#3 ' +
                                'D4 D#4 E4 F4 F#4 G4 G#4 A4 A#4 B4 C4 C#4 ' +
                                'A5 A#5 B5 C5 C#5 D5 D#5 E5 F5 F#5 G5 G#5 ' +
                                'E6 F6 F#6 G6 G#6 A6 A#6 B6 C6 C#6 D6 D#6 '});
  }

  setInversions() {
    var notesToInvert = ''

    for (var x = 0; x < this.state.settedNotes.split(' ').length; x++) {

      if (this.state.settedNotes.split(' ')[x] !== '') {

        if (this.state.settedNotes.split(' ')[x].includes('#')) {

          if (notesToInvert.includes(this.state.settedNotes.split(' ')[x].charAt(0) +
              this.state.settedNotes.split(' ')[x].charAt(1)) !== true) {
                notesToInvert += this.state.settedNotes.split(' ')[x].charAt(0) +
                                 this.state.settedNotes.split(' ')[x].charAt(1) + ' ';
              }
        }

        else {

          if (notesToInvert.includes(this.state.settedNotes.split(' ')[x].charAt(0) + ' ') !== true){
            notesToInvert += this.state.settedNotes.split(' ')[x].charAt(0) + ' ';
          }
        }
      }
    }

    var inversions = '';

    for (var i = 0; i < notesToInvert.split(' ').length; i++) {

      if (notesToInvert.split(' ')[i] !== '') {
        for (var j = 1; j <= 6; j++) {
          inversions += notesToInvert.split(' ')[i].toString() + j.toString() + " ";
        }
      }

    }

    this.setState({settedNotes: inversions});

  }

  unsetAllNotes() {
    this.setState({settedNotes: ''});
  }

  removeStringNotes(string) {
    var notesThatWontBeRemoved = ''
    for (var x = 0; x < this.state.settedNotes.split(' ').length; x++){
      if (this.state.settedNotes.split(' ')[x] !== '') {
        if (this.state.settedNotes.split(' ')[x].includes(string.toString()) !== true) {
          notesThatWontBeRemoved += this.state.settedNotes.split(' ')[x] + ' ';
        }
      }
    }
    this.setState({settedNotes: notesThatWontBeRemoved});
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
}

export default Fret;
