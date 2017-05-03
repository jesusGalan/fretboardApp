import React, { Component } from 'react';
import './index.css';

import Board from '../Board'


class Workspace extends Component {
  constructor() {
    super();
    this.state = {
      boardInfo: [],
      history: []
    }

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
    /*colourNotesSet set all array with color if the notes is shown in board */
    this.colourNotesSet = this.colourNotesSet.bind(this);
    this.moveColorsToLeft = this.moveColorsToLeft.bind(this);
    this.moveColorsToRight = this.moveColorsToRight.bind(this);
  }

  render() {
    return (
      <div className="Workspace">
        <button onClick={() => this.addBoard()}>add board</button>
        {this.state.boardInfo.map(this.renderBoard)}
      </div>
    );
  }

  addBoard() {
    let emptyArray = ['', '', '', '', '', '', '', '', '', '', '', '']
    this.setState({
      ...this.state,
      boardInfo: [
        ...this.state.boardInfo,
        {id: Math.random().toString(),
         settedNotes: "",
         noteColor: {'firststring': emptyArray,
                     'secondstring': emptyArray,
                     'thirdstring': emptyArray,
                     'fourthstring': emptyArray,
                     'fifthstring': emptyArray,
                     'sixthstring': emptyArray}
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
               giveColor={this.colourNotesSet.bind(this, info.id, boardPosition)}
               noteColor={this.state.boardInfo[boardPosition].noteColor}
               moveColorsToLeft={this.moveColorsToLeft.bind(this, info.id, boardPosition)}
               moveColorsToRight={this.moveColorsToRight.bind(this, info.id, boardPosition)}
               />
      </div>
    )
  }

  getTheBoardToEdit(id) {
    return this.state.boardInfo.find(
      (board) => {
        return board.id === id
      }
    )
  }

  moveColorsToLeft(id, position, string) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let stringNotes = this.getTheStringCorrespondencies()[string]
    let colors = boardToEdit.noteColor[stringNotes]
    let positionsOfColors = []
    let colorsToBeSplice = []

    for (var x = 0; x < colors.length; x++) {
      if (colors[x] !== '') {
        colorsToBeSplice.push(colors[x])
        positionsOfColors.push(x)
      }
    }

    let colorsFlipped = colorsToBeSplice.splice(1, colorsToBeSplice.length)
    colorsFlipped.push(colorsToBeSplice[0])
    let goodColorSet = []
    let count = 0

    for (var v = 0; v < colors.length; v++) {
      for (var j = 0; j < positionsOfColors.length; j++) {
        if (positionsOfColors[j] === v){
          goodColorSet.push(colorsFlipped[j])
          count += 1
        }
      }
      if (count === v) {
        goodColorSet.push('')
        count += 1
      }
    }

    boardToEdit.noteColor[stringNotes] = goodColorSet
    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
    
    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  getTheStringCorrespondencies() {
    return {
        '1': 'firststring',
        '2': 'secondstring',
        '3': 'thirdstring',
        '4': 'fourthstring',
        '5': 'fifthstring',
        '6': 'sixthstring'
    }
  }

  moveColorsToRight(id, position, string) {
    let boardToEdit = this.getTheBoardToEdit(id)    
    let stringNotes = this.getTheStringCorrespondencies()[string]
    let colors = boardToEdit.noteColor[stringNotes]
    let positionsOfColors = []
    let splicedColors = []

    for (var x = 0; x < colors.length; x++) {
      if (colors[x] !== '') {
        splicedColors.push(colors[x])
        positionsOfColors.push(x)
      }
    }

    let flippedColors = [
      splicedColors[splicedColors.length - 1],
      ...splicedColors.splice(0, splicedColors.length - 1)
    ]

    let goodColorSet = []
    let count = 0

    for (var v = 0; v < colors.length; v++) {
      for (var j = 0; j < positionsOfColors.length; j++) {
        if (positionsOfColors[j] === v){
          goodColorSet.push(flippedColors[j])
          count += 1
        }
      }
      if (count === v) {
        goodColorSet.push('')
        count += 1
      }
    }

    boardToEdit.noteColor[stringNotes] = goodColorSet

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  colourNotesSet(id, position) {
    let boardToEdit = this.getTheBoardToEdit(id)

    let sortedNotesByString = this.getTheSortedNotesOfAllStrings();
    let stringsCorrespondencies = this.getTheStringCorrespondencies();

    let notesActiveByString
    
    for (var x = 1; x <= 6; x++) {
      notesActiveByString = this.getSortedNotes(boardToEdit.settedNotes, x);
      boardToEdit.noteColor[stringsCorrespondencies[x]] = this.setColorsInArray(notesActiveByString, sortedNotesByString[x], this.getSetOfColors()[x])
      
    }

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  getSetOfColors() {
    return {'0': ['#bebebe', '#bebebe', '#bebebe',
                  '#bebebe', '#bebebe', '#bebebe',
                  '#bebebe', '#bebebe', '#bebebe',
                  '#bebebe', '#bebebe', '#bebebe'],

            '1': ['#ff9933', '#64c5af', '#d6a87c',
                  '#00d27f', '#cd8c95', '#ffcc33',
                  '#66ff33', '#ff66ff', '#0099ff',
                  '#ff6633', '#9966cc', '#ff6666'],

            '2': ['#ff66ff', '#0099ff', '#ff6633',
                  '#9966cc', '#ff6666', '#ff9933',
                  '#64c5af', '#d6a87c', '#00d27f',
                  '#cd8c95', '#ffcc33', '#66ff33'],

            '3': ['#00d27f', '#cd8c95', '#ffcc33',
                  '#66ff33', '#ff66ff', '#0099ff',
                  '#ff6633', '#9966cc', '#ff6666',
                  '#ff9933', '#64c5af', '#d6a87c'],

            '4': ['#9966cc', '#ff6666', '#ff9933',
                  '#64c5af', '#d6a87c', '#00d27f',
                  '#cd8c95', '#ffcc33', '#66ff33',
                  '#ff66ff', '#0099ff', '#ff6633'],

            '5': ['#ffcc33', '#66ff33', '#ff66ff',
                  '#0099ff', '#ff6633', '#9966cc',
                  '#ff6666', '#ff9933', '#64c5af',
                  '#d6a87c', '#00d27f', '#cd8c95'],
            
            '6': ['#ff9933', '#64c5af', '#d6a87c',
                  '#00d27f', '#cd8c95', '#ffcc33',
                  '#66ff33', '#ff66ff', '#0099ff',
                  '#ff6633', '#9966cc', '#ff6666']
    }
  }

  setColorsInArray(activeNotes, sortedNotes, setOfColors) {
    let count = 0
    let coloredArray = []

    for (var x = 0; x < sortedNotes.split(' ').length; x++) {
      for (var y = 0; y < activeNotes.split(' ').length; y++) {
        if (sortedNotes.split(' ')[x] === activeNotes.split(' ')[y]) {
          coloredArray.push(setOfColors[x]);
          count += 1;
        }
      }
      if (count === x) {
        coloredArray.push('');
        count += 1;
      }
    }
    return coloredArray
  }

  unsetColorInArray(note, sortedNotes, inputArray) {
    let arrayOfResults = [];
    let count = 0;
    let cleanNote = '';

    if (note.includes('#')) {
      cleanNote = note.charAt(0) + note.charAt(1)
    }
    else {
      cleanNote = note.charAt(0);
    }

    for (var x = 0; x < sortedNotes.split(' ').length; x++) {
      if (sortedNotes.split(' ')[x] === cleanNote) {
        arrayOfResults.push('');
        count += 1;
      }
      if (count === x) {
        arrayOfResults.push(inputArray[x]);
        count += 1;
      }
    }
    return arrayOfResults
  }

  getTheSortedNotesOfAllStrings() {
    return {'1': 'E F F# G G# A A# B C C# D D#',
            '2': 'B C C# D D# E F F# G G# A A#',
            '3': 'G G# A A# B C C# D D# E F F#',
            '4': 'D D# E F F# G G# A A# B C C#',
            '5': 'A A# B C C# D D# E F F# G G#',
            '6': 'E F F# G G# A A# B C C# D D#',}
  }

  getSortedNotes(notes, string) {
    let sortedNotesByString = this.getTheSortedNotesOfAllStrings();

    let sortedNotes = '';
    let unsortedNotes = this.getScaleNotesOnString(notes, string)

    sortedNotes = this.sortThisNotes(sortedNotesByString[string], unsortedNotes)
    

    return sortedNotes

  }

  sortThisNotes(sortedNotes, unsortedNotes) {
    let resultOfSortNotes = '';

    for (var x = 0; x < sortedNotes.split(' ').length; x++) {
      for (var y = 0; y < unsortedNotes.split(' ').length; y++) {
        if (sortedNotes.split(' ')[x] === unsortedNotes.split(' ')[y]) {
          resultOfSortNotes += unsortedNotes.split(' ')[y] + ' ';
        }
      }
    }
    return resultOfSortNotes
  }

  getScaleNotesOnString(notes, string) {
    let notesOnString = '';
    for (var j = 0; j < notes.split(' ').length; j++) {
      if (notes.split(' ')[j].includes(string)) {
        if (notes.split(' ')[j].includes('#')) {
          notesOnString += notes.split(' ')[j].charAt(0) +
          notes.split(' ')[j].charAt(1) + ' ';
        }
        else {
          notesOnString += notes.split(' ')[j].charAt(0) + ' ';
        }
      }
    }
    return notesOnString
  }

  removeBoardById(id) {
    this.setState({...this.state, boardInfo: this.state.boardInfo.filter(
      (board) => {
        return board.id !== id
      }
    )});
    console.log('This board with the ' + id + ' have been removed.');
  }

  setNote(id, position, note) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let stringsCorrespondencies = this.getTheStringCorrespondencies();
    let noteColorArrayOfNote = this.state.boardInfo[position].noteColor[stringsCorrespondencies[note.slice(-1)]]

    if (boardToEdit.settedNotes.includes(note) !== true){
      boardToEdit.settedNotes = (boardToEdit.settedNotes + ' ' + note + ' ').replace('  ', ' ');
      boardToEdit.noteColor[stringsCorrespondencies[note.slice(-1)]] = this.setAColorByNote(note, '#bebebe', this.getTheSortedNotesOfAllStrings()[note.slice(-1)], noteColorArrayOfNote)

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState})

      console.log('This board have been edit: ', boardToEdit)
    }
  }

  setAColorByNote(note, color, sortedNotes, arrayQueYaTengo) {
    let coloredArray = []
    let cleanNote = ''

    if (note.includes('#')) {
      cleanNote += note.charAt(0) + note.charAt(1)
    }
    else {
      cleanNote += note.charAt(0)
    }

    for (var x = 0; x < sortedNotes.split(' ').length; x++) {
      if (sortedNotes.split(' ')[x] === cleanNote) {
        coloredArray.push(color);
      }
      else {
        coloredArray.push(arrayQueYaTengo[x]);
      }
    }
    return coloredArray
  }

  getNewStateWithSamePosition(position, mutatingState, entireState) {
    let x = 0;
    let newState = [];
    
    while (x < entireState.length){
      if (x === position) {
        newState.push(mutatingState);
      }
      else {
        newState.push(entireState[x]);
      }
      x++;
    }
    return newState
  }

  unsetNote(id, position, note) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let stringsCorrespondencies = this.getTheStringCorrespondencies()
    let sortedNotes = this.getTheSortedNotesOfAllStrings();
    boardToEdit.settedNotes = (boardToEdit.settedNotes).replace(note + ' ', '');
    boardToEdit.noteColor[stringsCorrespondencies[note.slice(-1)]] = this.unsetColorInArray(note, sortedNotes[note.slice(-1)], boardToEdit.noteColor[stringsCorrespondencies[note.slice(-1)]]);
    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);;

    this.setState({...this.state, boardInfo: newBoardInfoState})

    console.log(note, 'should have been remove from ', boardToEdit);
  }

  setAllNotes(id, position) {
    let boardToEdit = this.getTheBoardToEdit(id)

    boardToEdit.settedNotes = 'E1 F1 F#1 G1 G#1 A1 A#1 B1 C1 C#1 D1 D#1 ' +
                              'B2 C2 C#2 D2 D#2 E2 F2 F#2 G2 G#2 A2 A#2 ' +
                              'G3 G#3 A3 A#3 B3 C3 C#3 D3 D#3 E3 F3 F#3 ' +
                              'D4 D#4 E4 F4 F#4 G4 G#4 A4 A#4 B4 C4 C#4 ' +
                              'A5 A#5 B5 C5 C#5 D5 D#5 E5 F5 F#5 G5 G#5 ' +
                              'E6 F6 F#6 G6 G#6 A6 A#6 B6 C6 C#6 D6 D#6 ';

    let stringsCorrespondencies = this.getTheStringCorrespondencies()
    for (var x = 1; x <= 6; x++) {
      boardToEdit.noteColor[stringsCorrespondencies[x]] = this.getSetOfColors()['0']
    }

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
    
    this.setState({...this.state, boardInfo: newBoardInfoState})

    console.log('All notes drawn in board: ', boardToEdit);

  }

  getScaleNotes(position) {
    let scaleNotes = ''
    for (var j = 0; j < this.state.boardInfo[position].settedNotes.split(' ').length; j++) {

      if (this.state.boardInfo[position].settedNotes.split(' ')[j] !== '') {

        if (this.state.boardInfo[position].settedNotes.split(' ')[j].includes('#')) {

          if (scaleNotes.includes(this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) +
              this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(1)) !== true) {
                scaleNotes += this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) +
                                 this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(1) + ' ';
              }
        }

        else {

          if (scaleNotes.includes(this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) + ' ') !== true){
            scaleNotes += this.state.boardInfo[position].settedNotes.split(' ')[j].charAt(0) + ' ';
          }
        }
      }
    }
    return scaleNotes
  }

  setInversions(id, position) {
    let notesToInvert = this.getScaleNotes(position);
    let inversions = [];
   
    for (var i = 0; i < notesToInvert.split(' ').length; i++) {
      if (notesToInvert.split(' ')[i] !== '') {
        for (var z = 1; z <= 6; z++) {
          inversions.push(notesToInvert.split(' ')[i].toString() + z.toString()) 
        }
      }
    }

    for (var h = 0; h < this.state.boardInfo[position].settedNotes.split(' ').length; h++) {
      inversions = this.removeElementFromArray(this.state.boardInfo[position].settedNotes.split(' ')[h], inversions)
    }

    for (var t = 0; t < inversions.length; t++) {
      this.setNote(id, position, inversions[t])
    }
  }

  removeElementFromArray(elem, arr) {
    let newArray = []
    for (var x = 0; x < arr.length; x++) {
      if (elem !== arr[x]) {
        newArray.push(arr[x])
      }
    }
    return newArray
  }

  unsetAllNotes(id, position) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let stringsCorrespondencies = this.getTheStringCorrespondencies()

    boardToEdit.settedNotes = '';

    for (var x = 1; x <= 6; x++) {
      boardToEdit.noteColor[stringsCorrespondencies[x]] = ['', '', '', '', '', '', '', '', '', '', '', '', ]
    }

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

    this.setState({...this.state, boardInfo: newBoardInfoState})
    console.log('Board with the id ', id, 'have been restarted!')
  }

  removeStringNotes(id, position, string) {
    let notesThatWontBeRemoved = ''
    for (var x = 0; x < this.state.boardInfo[position].settedNotes.split(' ').length; x++){
      if (this.state.boardInfo[position].settedNotes.split(' ')[x] !== '') {
        if (this.state.boardInfo[position].settedNotes.split(' ')[x].includes(string.toString()) !== true) {
          notesThatWontBeRemoved += this.state.boardInfo[position].settedNotes.split(' ')[x] + ' ';
        }
      }
    }

    let boardToEdit = this.getTheBoardToEdit(id)

    boardToEdit.settedNotes = notesThatWontBeRemoved;

    let stringsCorrespondencies = this.getTheStringCorrespondencies()

    boardToEdit.noteColor[stringsCorrespondencies[string]] = ['', '', '', '', '', '', '', '', '', '', '', '']

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  removeFretsFrom(id, position, valueFrom, valueTo) {
    if (valueFrom === '' || valueTo === ''){
      console.log('Error! Erase from frets function needs two arguments!');
    }
    else {
      valueFrom = parseInt(valueFrom, 10);
      valueTo = parseInt(valueTo, 10);

      let toValue = valueTo

      if (valueFrom > valueTo) {
        valueTo = valueFrom
        valueFrom = toValue;
      }

      let fretNotes = [['E1', 'B2', 'G3', 'D4', 'A5', 'E6'],
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

      let notesToRemove = ''

      for (var i = valueFrom; i <= valueTo; i++) {
        for (var z = 0; z <= 5; z++) {
          if (z === 5) {
            notesToRemove += fretNotes[i][z];
          }
          else {
            notesToRemove += fretNotes[i][z] + ' ';
          }
        }
        notesToRemove += ' ';
      }      

      let notesThatWontBeRemoved = '';

      for (var x = 0; x < this.state.boardInfo[position].settedNotes.split(' ').length; x++) {
        if (notesToRemove.includes(this.state.boardInfo[position].settedNotes.split(' ')[x]) !== true) {
          notesThatWontBeRemoved += this.state.boardInfo[position].settedNotes.split(' ')[x] + ' ';
        }
      }

      let boardToEdit = this.getTheBoardToEdit(id)

      let sortedNotes = this.getTheSortedNotesOfAllStrings();
      let stringsCorrespondencies = this.getTheStringCorrespondencies()

      for(var v = 0; v < notesToRemove.split(' ').length; v++) {
        if(notesToRemove.split(' ')[v] !== '') {
          boardToEdit.noteColor[stringsCorrespondencies[notesToRemove.split(' ')[v].slice(-1)]] = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotes[notesToRemove.split(' ')[v].slice(-1)], boardToEdit.noteColor[stringsCorrespondencies[notesToRemove.split(' ')[v].slice(-1)]]);
        }
      }

      boardToEdit.settedNotes = notesThatWontBeRemoved;
      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState})
    }
  }
}

export default Workspace;