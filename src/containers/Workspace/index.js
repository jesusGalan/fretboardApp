import React, { Component } from 'react';
import './index.css';

import Board from '../Board'


class Workspace extends Component {
  constructor() {
    super();
    this.state = {
      boardInfo: []
    }

    /*showstate is a function for see states and ease debug*/
    this.showState = this.showState.bind(this);
    /*addBoard cand add independent workspaces to be rendered*/
    this.addBoard = this.addBoard.bind(this);
    /*renderBoard do the job of render into html document*/
    this.renderBoard = this.renderBoard.bind(this);
    /*removeBoardById can remove a specific board with a unique id*/
    this.removeBoardById = this.removeBoardById.bind(this);
    /*removeStringNotes can remove all notes of a unique string*/
    this.removeStringNotes = this.removeStringNotes.bind(this);
    /*removeFretsFrom cand remove notes that live in a range of frets*/
    this.removeFretsFrom = this.removeFretsFrom.bind(this);
    /*setNote can set a note in a state that will be rendered*/
    this.setNote = this.setNote.bind(this);
    /*setAllNotes can set all notes in a state that is going to be renderer*/
    this.setAllNotes = this.setAllNotes.bind(this);
    /*unsetNote can remove a note that was been added previously*/
    this.unsetNote = this.unsetNote.bind(this);
    /*unsetAllNotes can remove all notes of a unique board*/
    this.unsetAllNotes = this.unsetAllNotes.bind(this);
    /*setInversions can see the notes added and add all of that notes in the board*/
    this.setInversions = this.setInversions.bind(this);
  }

  render() {
    return (
      <div className="Workspace">
        <button onClick={() => this.addBoard()}>add board</button>
        {/*<button onClick={this.showState}>show me the state</button>*/}
        {this.state.boardInfo.map(this.renderBoard)}
      </div>
    );
  }

  showState() {
    console.log(this.state.boardInfo);
  }

  addBoard() {
    this.setState({
      ...this.state,
      boardInfo: [
        ...this.state.boardInfo,
        {id: Math.random().toString(),
         settedNotes: "",
        }
      ]
    })
  }

  renderBoard(info, boardPosition) {
    return (
      <div key={boardPosition}>
        <Board settedNotes={this.state.boardInfo[boardPosition].settedNotes}
               setNote={this.setNote.bind(this, info.id, boardPosition)}
               unsetNote={this.unsetNote.bind(this, info.id, boardPosition)}
               setAllNotes={() => this.setAllNotes(info.id, boardPosition)}
               setInversions={() => this.setInversions(info.id, boardPosition)}
               removeStringNotes={this.removeStringNotes.bind(this, info.id, boardPosition)}
               unsetAllNotes={() => this.unsetAllNotes(info.id, boardPosition)}
               removeThisBoard={() => this.removeBoardById(info.id)}
               removeFretsFrom={this.removeFretsFrom.bind(this, info.id, boardPosition)}
               />
      </div>
    )
  }

  removeBoardById(id) {
    console.log('This board with the ' + id + ' will be removed.');
    this.setState({...this.state, boardInfo: this.state.boardInfo.filter(
      (board) => {
        return board.id !== id
      }
    )});
  }

  setNote(id, position, note) {
    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    if (boardToEdit.settedNotes.includes(note) !== true){
      boardToEdit.settedNotes = (boardToEdit.settedNotes + ' ' + note + ' ').replace('  ', ' ');

      var x = 0;
      var newBoardInfoState = [];

      while (x < this.state.boardInfo.length){
        if (x === position) {
          newBoardInfoState.push(boardToEdit);
        }
        else {
          newBoardInfoState.push(this.state.boardInfo[x]);
        }
        x++;
      }
      this.setState({...this.state, boardInfo: newBoardInfoState})
    }

    console.log('This board have been edit: ', boardToEdit)
  }

  unsetNote(id, position, note) {
    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    boardToEdit.settedNotes = (boardToEdit.settedNotes).replace(note + ' ', '');

    var x = 0;
    var newBoardInfoState = [];

    while (x < this.state.boardInfo.length){
      if (x === position) {
        newBoardInfoState.push(boardToEdit);
      }
      else {
        newBoardInfoState.push(this.state.boardInfo[x]);
      }
      x++;
    }

    this.setState({...this.state, boardInfo: newBoardInfoState})

    console.log(note, 'should have been remove from ', boardToEdit);
  }

  setAllNotes(id, position) {
    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    boardToEdit.settedNotes = 'E1 F1 F#1 G1 G#1 A1 A#1 B1 C1 C#1 D1 D#1 ' +
                              'B2 C2 C#2 D2 D#2 E2 F2 F#2 G2 G#2 A2 A#2 ' +
                              'G3 G#3 A3 A#3 B3 C3 C#3 D3 D#3 E3 F3 F#3 ' +
                              'D4 D#4 E4 F4 F#4 G4 G#4 A4 A#4 B4 C4 C#4 ' +
                              'A5 A#5 B5 C5 C#5 D5 D#5 E5 F5 F#5 G5 G#5 ' +
                              'E6 F6 F#6 G6 G#6 A6 A#6 B6 C6 C#6 D6 D#6 ';

    var x = 0;
    var newBoardInfoState = [];

    while (x < this.state.boardInfo.length){
      if (x === position) {
        newBoardInfoState.push(boardToEdit);
      }
      else {
        newBoardInfoState.push(this.state.boardInfo[x]);
      }
      x++;
    }

    this.setState({...this.state, boardInfo: newBoardInfoState})

    console.log('All notes drawn in board: ', boardToEdit);

  }

  setInversions(id, position) {
    console.log(position, 'position');
    console.log(id, 'id');

    var notesToInvert = ''

    for (var j = 0; j < this.state.boardInfo[position].settedNotes.split(' ').length; j++) {

      if (this.state.boardInfo[position].settedNotes.split(' ')[j] !== '') {

        if (this.state.boardInfo[position].settedNotes.split(' ')[j].includes('#')) {

          if (notesToInvert.includes(this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) +
              this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(1)) !== true) {
                notesToInvert += this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) +
                                 this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(1) + ' ';
              }
        }

        else {

          if (notesToInvert.includes(this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) + ' ') !== true){
            notesToInvert += this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) + ' ';
          }
        }
      }
    }

    var inversions = '';

    for (var i = 0; i < notesToInvert.split(' ').length; i++) {

      if (notesToInvert.split(' ')[i] !== '') {
        for (var z = 1; z <= 6; z++) {
          inversions += notesToInvert.split(' ')[i].toString() + z.toString() + " ";
        }
      }

    }

    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    boardToEdit.settedNotes = inversions;

    var x = 0;
    var newBoardInfoState = [];

    while (x < this.state.boardInfo.length){
      if (x === position) {
        newBoardInfoState.push(boardToEdit);
      }
      else {
        newBoardInfoState.push(this.state.boardInfo[x]);
      }
      x++;
    }

    this.setState({...this.state, boardInfo: newBoardInfoState})

  }

  unsetAllNotes(id, position) {
    console.log(id, position);
    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    boardToEdit.settedNotes = '';

    var x = 0;
    var newBoardInfoState = [];

    while (x < this.state.boardInfo.length){
      if (x === position) {
        newBoardInfoState.push(boardToEdit);
      }
      else {
        newBoardInfoState.push(this.state.boardInfo[x]);
      }
      x++;
    }

    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  removeStringNotes(id, position, string) {
    console.log(position, string, id);
    var notesThatWontBeRemoved = ''
    for (var x = 0; x < this.state.boardInfo[position].settedNotes.split(' ').length; x++){
      if (this.state.boardInfo[position].settedNotes.split(' ')[x] !== '') {
        if (this.state.boardInfo[position].settedNotes.split(' ')[x].includes(string.toString()) !== true) {
          notesThatWontBeRemoved += this.state.boardInfo[position].settedNotes.split(' ')[x] + ' ';
        }
      }
    }

    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    boardToEdit.settedNotes = notesThatWontBeRemoved;

    var j = 0;
    var newBoardInfoState = [];

    while (j < this.state.boardInfo.length){
      if (j === position) {
        newBoardInfoState.push(boardToEdit);
      }
      else {
        newBoardInfoState.push(this.state.boardInfo[j]);
      }
      j++;
    }

    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  removeFretsFrom(id, position, valueFrom, valueTo) {
    if (valueFrom === '' || valueTo === ''){
      console.log('Error! Erase from frets function needs two arguments!');
    }
    else {
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

      var notesThatWontBeRemoved = '';

      for (var x = 0; x < this.state.boardInfo[position].settedNotes.split(' ').length; x++) {
        if (notesToRemove.includes(this.state.boardInfo[position].settedNotes.split(' ')[x]) !== true) {
          notesThatWontBeRemoved += this.state.boardInfo[position].settedNotes.split(' ')[x] + ' ';
        }
      }

      var boardToEdit = this.state.boardInfo.filter(
        (board) => {
          return board.id === id
        }
      )[0];

      boardToEdit.settedNotes = notesThatWontBeRemoved;

      var j = 0;
      var newBoardInfoState = [];

      while (j < this.state.boardInfo.length){
        if (j === position) {
          newBoardInfoState.push(boardToEdit);
        }
        else {
          newBoardInfoState.push(this.state.boardInfo[j]);
        }
        j++;
      }

      this.setState({...this.state, boardInfo: newBoardInfoState})
    }
  }
}


export default Workspace;
