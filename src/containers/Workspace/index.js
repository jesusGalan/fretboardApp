import React, { Component } from 'react';
import './index.css';

import Board from '../Board'


class Workspace extends Component {
  constructor() {
    super();
    this.state = {
      boardInfo: [],
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
        {<button onClick={this.showState}>show me the state</button>}
        {this.state.boardInfo.map(this.renderBoard)}
      </div>
    );
  }

  addBoard() {
    this.setState({
      ...this.state,
      boardInfo: [
        ...this.state.boardInfo,
        {id: Math.random().toString(),
         settedNotes: "",
         noteColor: {'firststring': [],
                     'secondstring': [],
                     'thirdstring': [],
                     'fourthstring': [],
                     'fifthstring': [],
                     'sixthstring': []}
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

  moveColorsToLeft(id, position, string) {
    let boardToEdit = this.state.boardInfo.find(
      (board) => {
        return board.id === id
      }
    )
    
    let stringsCorrespondencies = {
        '1': 'firststring',
        '2': 'secondstring',
        '3': 'thirdstring',
        '4': 'fourthstring',
        '5': 'fifthstring',
        '6': 'sixthstring'
    }
    
    let stringNotes = stringsCorrespondencies[string]
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

    console.log(goodColorSet)
    
    boardToEdit.noteColor[stringNotes] = goodColorSet

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
    
    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  moveColorsToRight(id, position, string) {
    let boardToEdit = this.state.boardInfo.find(
      (board) => {
        return board.id === id
      }
    );
    
    let stringsCorrespondencies = {
        '1': 'firststring',
        '2': 'secondstring',
        '3': 'thirdstring',
        '4': 'fourthstring',
        '5': 'fifthstring',
        '6': 'sixthstring'
    }

    let stringNotes = stringsCorrespondencies[string]
    
    let colors = boardToEdit.noteColor[stringNotes]
    let positionsOfColors = []
    let colorsToBeSplice = []

    for (var x = 0; x < colors.length; x++) {
      if (colors[x] !== '') {
        colorsToBeSplice.push(colors[x])
        positionsOfColors.push(x)
      }
    }

    let colorsFlipped = [
      colorsToBeSplice[colorsToBeSplice.length - 1],
      ...colorsToBeSplice.splice(0, colorsToBeSplice.length - 1)
    ]

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

    let notesColor = [
        boardToEdit.noteColor[stringNotes][11],
        ...boardToEdit.noteColor[stringNotes].splice(0, 11)
    ]
    boardToEdit.noteColor[stringNotes] = goodColorSet

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  colourNotesSet(id, position) {
    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    var sortedNotesByString = this.getTheSortedNotesOfAllStrings();

    let notesFirstString = this.getSortedNotes(boardToEdit.settedNotes, '1');
    let notesSecondString = this.getSortedNotes(boardToEdit.settedNotes, '2');
    let notesThirdString = this.getSortedNotes(boardToEdit.settedNotes, '3');
    let notesFourthString = this.getSortedNotes(boardToEdit.settedNotes, '4');
    let notesFifthString = this.getSortedNotes(boardToEdit.settedNotes, '5');
    let notesSixthString = this.getSortedNotes(boardToEdit.settedNotes, '6');

    boardToEdit.noteColor.firststring = this.setColorsInArrayByString(notesFirstString, sortedNotesByString.firststring, '1')
    boardToEdit.noteColor.secondstring = this.setColorsInArrayByString(notesSecondString, sortedNotesByString.secondstring, '2')
    boardToEdit.noteColor.thirdstring = this.setColorsInArrayByString(notesThirdString, sortedNotesByString.thirdstring, '3')
    boardToEdit.noteColor.fourthstring = this.setColorsInArrayByString(notesFourthString, sortedNotesByString.fourthstring, '4')
    boardToEdit.noteColor.fifthstring = this.setColorsInArrayByString(notesFifthString, sortedNotesByString.fifthstring, '5')
    boardToEdit.noteColor.sixthstring = this.setColorsInArrayByString(notesSixthString, sortedNotesByString.firststring, '6')

    var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

    this.setState({...this.state, boardInfo: newBoardInfoState})
  }

  setColorsInArrayByString(notesActive, sortedNotes, string) {
    
    var setOfColorsFirstString = ['#ff9933', '#64c5af', '#d6a87c',
                                  '#00d27f', '#cd8c95', '#ffcc33',
                                  '#66ff33', '#ff66ff', '#0099ff',
                                  '#ff6633', '#9966cc', '#ff6666']

    var setOfColorsSecondString = ['#ff66ff', '#0099ff', '#ff6633',
                                   '#9966cc', '#ff6666', '#ff9933',
                                   '#64c5af', '#d6a87c', '#00d27f',
                                   '#cd8c95', '#ffcc33', '#66ff33']

    var setOfColorsThirdString = ['#00d27f', '#cd8c95', '#ffcc33',
                                  '#66ff33', '#ff66ff', '#0099ff',
                                  '#ff6633', '#9966cc', '#ff6666',
                                  '#ff9933', '#64c5af', '#d6a87c']

    var setOfColorsFourthString = ['#9966cc', '#ff6666', '#ff9933',
                                   '#64c5af', '#d6a87c', '#00d27f',
                                   '#cd8c95', '#ffcc33', '#66ff33',
                                   '#ff66ff', '#0099ff', '#ff6633']

    var setOfColorsFifthString = ['#ffcc33', '#66ff33', '#ff66ff',
                                  '#0099ff', '#ff6633', '#9966cc',
                                  '#ff6666', '#ff9933', '#64c5af',
                                  '#d6a87c', '#00d27f', '#cd8c95']

    let arrayOfResults = [];

    if (string === '1') {
      arrayOfResults = this.setColorsInArray(notesActive, sortedNotes, setOfColorsFirstString)
    }
    if (string === '2') {
      arrayOfResults = this.setColorsInArray(notesActive, sortedNotes, setOfColorsSecondString)
    }
    if (string === '3') {
      arrayOfResults = this.setColorsInArray(notesActive, sortedNotes, setOfColorsThirdString)
    }
    if (string === '4') {
      arrayOfResults = this.setColorsInArray(notesActive, sortedNotes, setOfColorsFourthString)
    }
    if (string === '5') {
      arrayOfResults = this.setColorsInArray(notesActive, sortedNotes, setOfColorsFifthString)
    }
    if (string === '6') {
      arrayOfResults = this.setColorsInArray(notesActive, sortedNotes, setOfColorsFirstString)
    }

    return arrayOfResults
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
    var arrayOfResults = [];
    var count = 0;
    var cleanNote = '';

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
    return {'firststring': 'E F F# G G# A A# B C C# D D#',
            'secondstring': 'B C C# D D# E F F# G G# A A#',
            'thirdstring': 'G G# A A# B C C# D D# E F F#',
            'fourthstring': 'D D# E F F# G G# A A# B C C#',
            'fifthstring': 'A A# B C C# D D# E F F# G G#'}
  }

  getSortedNotes(notes, string) {
    let sortedNotesByString = this.getTheSortedNotesOfAllStrings();

    var sortedNotes = '';
    let unsortedNotes = this.getScaleNotesOnString(notes, string)

    if (string === '1') {
      sortedNotes = this.sortThisNotes(sortedNotesByString.firststring, unsortedNotes)
    }
    if (string === '2') {
      sortedNotes = this.sortThisNotes(sortedNotesByString.secondstring, unsortedNotes)
    }
    if (string === '3') {
      sortedNotes = this.sortThisNotes(sortedNotesByString.thirdstring, unsortedNotes)
    }
    if (string === '4') {
      sortedNotes = this.sortThisNotes(sortedNotesByString.fourthstring, unsortedNotes)
    }
    if (string === '5') {
      sortedNotes = this.sortThisNotes(sortedNotesByString.fifthstring, unsortedNotes)
    }
    if (string === '6') {
      sortedNotes = this.sortThisNotes(sortedNotesByString.firststring, unsortedNotes)
    }

    return sortedNotes

  }

  sortThisNotes(sortedNotes, unsortedNotes) {
    var resultOfSortNotes = '';

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
    var notesOnString = '';
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

      var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState})
    }

    console.log('This board have been edit: ', boardToEdit)
  }

  getNewStateWithSamePosition(position, mutatingState, entireState) {
    var x = 0;
    var newState = [];
    
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
    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    let sortedNotes = this.getTheSortedNotesOfAllStrings();

    boardToEdit.settedNotes = (boardToEdit.settedNotes).replace(note + ' ', '');
    if (note.slice(-1) === '1') {
      boardToEdit.noteColor.firststring = this.unsetColorInArray(note, sortedNotes.firststring, boardToEdit.noteColor.firststring);
    }
    if (note.slice(-1) === '2') {
      boardToEdit.noteColor.secondstring = this.unsetColorInArray(note, sortedNotes.secondstring, boardToEdit.noteColor.secondstring);
    }
    if (note.slice(-1) === '3') {
      boardToEdit.noteColor.thirdstring = this.unsetColorInArray(note, sortedNotes.thirdstring, boardToEdit.noteColor.thirdstring);
    }
    if (note.slice(-1) === '4') {
      boardToEdit.noteColor.fourthstring = this.unsetColorInArray(note, sortedNotes.fourthstring, boardToEdit.noteColor.fourthstring);
    }
    if (note.slice(-1) === '5') {
      boardToEdit.noteColor.fifthstring = this.unsetColorInArray(note, sortedNotes.fifthstring, boardToEdit.noteColor.fifthstring);
    }
    if (note.slice(-1) === '6') {
      boardToEdit.noteColor.sixthstring = this.unsetColorInArray(note, sortedNotes.firststring, boardToEdit.noteColor.sixthstring);
    }

    var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);;

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

    var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
    this.setState({...this.state, boardInfo: newBoardInfoState})

    console.log('All notes drawn in board: ', boardToEdit);

  }

  getScaleNotes(position) {
    var scaleNotes = ''
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
    var notesToInvert = this.getScaleNotes(position);
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
    var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);;

    this.setState({...this.state, boardInfo: newBoardInfoState})

  }

  unsetAllNotes(id, position) {
    var boardToEdit = this.state.boardInfo.filter(
      (board) => {
        return board.id === id
      }
    )[0];

    boardToEdit.settedNotes = '';
    boardToEdit.noteColor.firststring = ['', '', '', '', '', '', '', '', '', '', '', '', ]
    boardToEdit.noteColor.secondstring = ['', '', '', '', '', '', '', '', '', '', '', '', ]
    boardToEdit.noteColor.thirdstring = ['', '', '', '', '', '', '', '', '', '', '', '', ]
    boardToEdit.noteColor.fourthstring = ['', '', '', '', '', '', '', '', '', '', '', '', ]
    boardToEdit.noteColor.fifthstring = ['', '', '', '', '', '', '', '', '', '', '', '', ]
    boardToEdit.noteColor.sixthstring = ['', '', '', '', '', '', '', '', '', '', '', '', ]
    
    var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

    this.setState({...this.state, boardInfo: newBoardInfoState})
    console.log('Board with the id ', id, 'have been restarted!')
  }

  removeStringNotes(id, position, string) {
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
    if (string === 1) {
      boardToEdit.noteColor.firststring = ['', '', '', '', '', '', '', '', '', '', '', '']
    }
    if (string === 2) {
      boardToEdit.noteColor.secondstring = ['', '', '', '', '', '', '', '', '', '', '', '']
    }
    if (string === 3) {
      boardToEdit.noteColor.thirdstring = ['', '', '', '', '', '', '', '', '', '', '', '']
    }
    if (string === 4) {
      boardToEdit.noteColor.fourthstring = ['', '', '', '', '', '', '', '', '', '', '', '']
    }
    if (string === 5) {
      boardToEdit.noteColor.fifthstring = ['', '', '', '', '', '', '', '', '', '', '', '']
    }
    if (string === 6) {
      boardToEdit.noteColor.sixthstring = ['', '', '', '', '', '', '', '', '', '', '', '']
    }

    var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

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

      let sortedNotes = this.getTheSortedNotesOfAllStrings();

      for(var v = 0; v < notesToRemove.split(' ').length; v++) {
        if (notesToRemove.split(' ')[v].slice(-1) === '1') {
          boardToEdit.noteColor.firststring = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotes.firststring, boardToEdit.noteColor.firststring);
        }
        if (notesToRemove.split(' ')[v].slice(-1) === '2') {
          boardToEdit.noteColor.secondstring = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotes.secondstring, boardToEdit.noteColor.secondstring);
        }
        if (notesToRemove.split(' ')[v].slice(-1) === '3') {
          boardToEdit.noteColor.thirdstring = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotes.thirdstring, boardToEdit.noteColor.thirdstring);
        }
        if (notesToRemove.split(' ')[v].slice(-1) === '4') {
          boardToEdit.noteColor.fourthstring = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotes.fourthstring, boardToEdit.noteColor.fourthstring);
        }
        if (notesToRemove.split(' ')[v].slice(-1) === '5') {
          boardToEdit.noteColor.fifthstring = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotes.fifthstring, boardToEdit.noteColor.fifthstring);
        }
        if (notesToRemove.split(' ')[v].slice(-1) === '6') {
          boardToEdit.noteColor.sixthstring = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotes.firststring, boardToEdit.noteColor.sixthstring);
        }
      }

      boardToEdit.settedNotes = notesThatWontBeRemoved;
      var newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState})
    }
  }
}


export default Workspace;
