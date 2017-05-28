import React, { Component } from 'react'

import Board from 'components/GuitarApp/parts/Board'

import {
  moveElementsActiveOfArrayToRigth,
  moveElementsActiveOfArrayToLeft,
  countElementsOfAnArray,
  cleanTheNote} from './Functions'

import {
  notesColors,
  sortedNotesByString,
  stringCorrespondencies,
  notesByFret,
  allNotes,
  emptyStringsNoteColors,
  getTunings,
  colorByNote
} from './NotesRepository'


class Mastboard extends Component {
  constructor() {
    super();
    this.state = {
      boardInfo: [],
      history: [],
    }

    /*addBoard cand add independent Mastboards to be rendered*/
    this.addBoard = this.addBoard.bind(this);
    /*renderBoard do the job of render into html document*/
    this.renderBoard = this.renderBoard.bind(this);
    /*removeBoardById can remove a specific board with a unique id*/
    this.removeBoardById = this.removeBoardById.bind(this);
    /*removeStringNotes can remove all notes of a unique string*/
    this.removeStringNotes = this.removeStringNotes.bind(this);
    /*removeFretsFrom cand remove notes living in a range of frets*/
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
    this.redo = this.redo.bind(this);
    this.undo = this.undo.bind(this);
    this.changeTuning = this.changeTuning.bind(this);
  }

  render() {
    return (
      <div className="Mastboard">
        <button onClick={() => this.addBoard()}>add board</button>
        <button onClick={() => this.showState()}>show state</button>
        {this.state.boardInfo.map(this.renderBoard)}
      </div>
    );
  }

  componentDidMount() {
    this.addBoard()
  }

  showState() {
    console.log(this.state)
  }

  addBoard() {
    let boardId = Math.random().toString()
    this.setState({
      ...this.state,
      boardInfo: [
        ...this.state.boardInfo,
        {id: boardId,
         settedNotes: "",
         noteColor: emptyStringsNoteColors(),
         tuning: getTunings('standard')}
      ],
      history: [...this.state.history, {
        id: boardId,
        UndoStatesRepository: [],
        RedoStatesRepository: []
      }]
    })
  }

  renderBoard(info, boardPosition) {
    console.log(info.tuning)
    return (
      <Board key={boardPosition}
              settedNotes={this.state.boardInfo[boardPosition].settedNotes}
              setNote={this.setNote.bind(this, info.id, boardPosition, info.tuning)}
              unsetNote={this.unsetNote.bind(this, info.id, boardPosition)}
              setAllNotes={() => this.setAllNotes(info.id, boardPosition)}
              setInversions={() => this.setInversions(info.id, boardPosition)}
              removeStringNotes={this.removeStringNotes.bind(this, info.id, boardPosition)}
              unsetAllNotes={() => this.unsetAllNotes(info.id, boardPosition)}
              removeThisBoard={() => this.removeBoardById(info.id)}
              removeFretsFrom={this.removeFretsFrom.bind(this, info.id, boardPosition)}
              giveColor={this.colourNotesSet.bind(this, info.id, boardPosition, info.tuning)}
              noteColor={this.state.boardInfo[boardPosition].noteColor}
              moveColorsToLeft={this.moveColorsToLeft.bind(this, info.id, boardPosition)}
              moveColorsToRight={this.moveColorsToRight.bind(this, info.id, boardPosition)}
              redo={() => this.redo(info.id, boardPosition)}
              undo={() => this.undo(info.id, boardPosition)} 
              changeTuning={this.changeTuning.bind(this, info.id, boardPosition)}
              tuning={info.tuning}
              history={this.state.history[boardPosition]}
              />
    )
  }

  fillArrayWithNotesActivesAndTheirColors(workingBoard, tuning) {
    let dictionaryOfResults = {'1' : [], '2' : [], '3' : [], '4' : [], '5' : [], '6' : []}
    let notesActiveByString
    let count = 0

    for (var u = 1; u <= 6; u++) {
      notesActiveByString = this.getSortedNotes(workingBoard.settedNotes, u)
      count = 0
      for (var x = 0; x < getTunings(tuning)['tuningInfo'][u][1].length; x++) {
        
        for (var y = 0; y < notesActiveByString.split(' ').length; y++) {
          if (getTunings(tuning)['tuningInfo'][u][1][x] === notesActiveByString.split(' ')[y]) {
            dictionaryOfResults[u].push([notesActiveByString.split(' ')[y], workingBoard.noteColor[stringCorrespondencies()[u]][x]]);
            count += 1;
          }
        }
        if (count === x) {
          dictionaryOfResults[u].push(['', '']);
          count += 1;
        }
      }
    }
    return dictionaryOfResults
  }

  getNewNoteColors(mixNotesAndColors, tuning) {
    let newNoteColor = {'firststring': [], 'secondstring': [], 'thirdstring': [], 'fourthstring': [], 'fifthstring': [], 'sixthstring': [],}
    let count = 0

    for (var x = 1; x <= 6; x++) {
      count = 0
      for (var r = 0; r < getTunings(tuning)['tuningInfo'][x][1].length; r++) {
        for (var z = 0; z < mixNotesAndColors[x].length; z++) {
          if (mixNotesAndColors[x][z][0] === getTunings(tuning)['tuningInfo'][x][1][r]) {
            newNoteColor[stringCorrespondencies()[x]].push(mixNotesAndColors[x][z][1])
            count += 1
          }
        }
        if (count === r) {
          newNoteColor[stringCorrespondencies()[x]].push('')
          count += 1
        }
      }
    }
    return newNoteColor
  }

  changeTuning(id, position, tuning) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let tuneThatMustChange = boardToEdit.tuning['nameOfTheTuning']
    let mixNotesAndColors = this.fillArrayWithNotesActivesAndTheirColors(boardToEdit, tuneThatMustChange)
    let historyToWork = this.getTheHistoryWithTheId(id)
    let historyThatWontMutate = this.getTheHistoryWithDifferentId(id)

    for (var histo = 0; histo < historyToWork.UndoStatesRepository.length; histo++) {
      historyToWork.UndoStatesRepository[histo].tuning = getTunings(tuning)
      let histoNotesAndColors = this.fillArrayWithNotesActivesAndTheirColors(historyToWork.UndoStatesRepository[histo], tuneThatMustChange)
      historyToWork.UndoStatesRepository[histo].noteColor = this.getNewNoteColors(histoNotesAndColors, tuning)
    }
    let newHistoryState = [...historyThatWontMutate, historyToWork]

    boardToEdit.noteColor = this.getNewNoteColors(mixNotesAndColors, tuning)
    boardToEdit.tuning = getTunings(tuning)
    

    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo)

    this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
  }

  redo(id, position) {
    let boardToEdit, boardCopy = this.getTheBoardToEdit(id)
    let historyToWork = this.getTheHistoryWithTheId(id)
    let historyThatWontMutate = this.getTheHistoryWithDifferentId(id);
    
    try{
      boardToEdit = {id: id,
                    settedNotes: historyToWork.RedoStatesRepository[historyToWork.RedoStatesRepository.length - 1].settedNotes,
                    noteColor: {...historyToWork.RedoStatesRepository[historyToWork.RedoStatesRepository.length - 1].noteColor},
                    tuning: {...historyToWork.RedoStatesRepository[historyToWork.RedoStatesRepository.length - 1].tuning}}
      
      historyToWork.UndoStatesRepository = [...historyToWork.UndoStatesRepository, {settedNotes: boardCopy.settedNotes, noteColor: {...boardCopy.noteColor}, tuning: {...boardCopy.tuning}}]
      historyToWork.RedoStatesRepository = this.removeLastElementOfArray(historyToWork.RedoStatesRepository)
      let newHistoryState = [...historyThatWontMutate, historyToWork]

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo)
      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
    }
    catch (e) {
      if (e.name !== 'TypeError') {
        console.log(e.name, ': ', e.message)
      }
      else {
        console.log('Oooops! I cannot find any Redo State.')
      }
    }
  }
  // TODO: disable Undo button
  undo(id, position) {
    let boardToEdit, boardCopy = this.getTheBoardToEdit(id)
    let historyToWork = this.getTheHistoryWithTheId(id)
    let historyThatWontMutate = this.getTheHistoryWithDifferentId(id);    

    try {  
      boardToEdit = {id: id,
                     settedNotes: historyToWork.UndoStatesRepository[historyToWork.UndoStatesRepository.length - 1].settedNotes,
                     noteColor: {...historyToWork.UndoStatesRepository[historyToWork.UndoStatesRepository.length - 1].noteColor},
                     tuning: {...historyToWork.UndoStatesRepository[historyToWork.UndoStatesRepository.length - 1].tuning}}

      historyToWork.RedoStatesRepository = [...historyToWork.RedoStatesRepository, {settedNotes: boardCopy.settedNotes, noteColor: {...boardCopy.noteColor}, tuning: {...boardCopy.tuning}}]
      historyToWork.UndoStatesRepository = this.removeLastElementOfArray(historyToWork.UndoStatesRepository)
      let newHistoryState = [...historyThatWontMutate, historyToWork]

      console.log(historyToWork)
      
      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
    }
    catch (e) {
      if (e.name !== 'TypeError') {
        console.log(e.name, ': ', e.message)
      }
      else {
        console.log('Oooops! I cannot find any Undo State.', e.name, e.message)
      }
    } 
  }

  moveColorsToLeft(id, position, string) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let colors = boardToEdit.noteColor[stringCorrespondencies()[string]]

    let returnTrueIfAbleToMove = this.testStringColorBeforeMove(colors)

    if (returnTrueIfAbleToMove) {
      let newHistoryState = this.configHistory(id, boardToEdit)
      
      boardToEdit.noteColor[stringCorrespondencies()[string]] = moveElementsActiveOfArrayToLeft(colors)

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
      
      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
    }
  }

  setInversions(id, position) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let notesToInvert = this.getScaleNotes(position);
    let inversions = [];
    let countOfSettedNotes = countElementsOfAnArray(boardToEdit.settedNotes)
    let countOfNotesToInvert = countElementsOfAnArray(notesToInvert)

    if (countOfSettedNotes < countOfNotesToInvert * 6) {
      for (var i = 0; i < notesToInvert.split(' ').length; i++) {
        if (notesToInvert.split(' ')[i] !== '') {
          for (var z = 1; z <= 6; z++) {
            inversions.push(notesToInvert.split(' ')[i].toString() + z.toString()) 
          }
        }
      }

      let notesThatWillBeSetted = inversions

      for (var h = 0; h < this.state.boardInfo[position].settedNotes.split(' ').length; h++) {
        inversions = this.removeElementFromArray(this.state.boardInfo[position].settedNotes.split(' ')[h], inversions)
      }

      let stringsCorrespondencies = stringCorrespondencies()
      let newHistoryState = this.configHistory(id, boardToEdit)
      let noteColorArrayOfNote

      for (var p = 0; p < inversions.length; p++) {
        noteColorArrayOfNote = this.state.boardInfo[position].noteColor[stringsCorrespondencies[inversions[p].slice(-1)]]
        boardToEdit.noteColor[stringsCorrespondencies[inversions[p].slice(-1)]] = this.setAColorByNote(inversions[p], '#bebebe', sortedNotesByString()[inversions[p].slice(-1)], noteColorArrayOfNote)
      }

      let newSettedNotes = ' '

      for (var w = 0; w < notesThatWillBeSetted.length; w++) {
        newSettedNotes = newSettedNotes + ' ' + notesThatWillBeSetted[w]
      }

      boardToEdit.settedNotes = newSettedNotes

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
    }
  }

  removeLastElementOfArray(arr) {
    let newArr = []
    let x = 0
    for (x = 0; x < arr.length - 1; x++) {
      newArr.push(arr[x])
    }
    return newArr
  }

  unsetAllNotes(id, position) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let stringsCorrespondencies = stringCorrespondencies()
    
    if (boardToEdit.settedNotes.length > 1) {
      let newHistoryState = this.configHistory(id, boardToEdit)

      boardToEdit.settedNotes = ''
      for (var x = 1; x <= 6; x++) {
        boardToEdit.noteColor[stringsCorrespondencies[x]] = ['', '', '', '', '', '', '', '', '', '', '', '', ]
      }

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo)

      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})

      console.log('Board with the id ', id, 'have been restarted!')
    }
  }

  setNote(id, position, tuning, note) {
    let boardToEdit = this.getTheBoardToEdit(id)
    
    let stringsCorrespondencies = stringCorrespondencies();
    
    if (boardToEdit.settedNotes.includes(note) !== true){
      let noteColorArrayOfNote = this.state.boardInfo[position].noteColor[stringsCorrespondencies[note.slice(-1)]]
      let newHistoryState = this.configHistory(id, boardToEdit)
      boardToEdit.settedNotes = (boardToEdit.settedNotes + ' ' + note + ' ').replace('  ', ' ');
      boardToEdit.noteColor[stringsCorrespondencies[note.slice(-1)]] = this.setAColorByNote(note, '#bebebe', getTunings(tuning['nameOfTheTuning'])['tuningInfo'][note.slice(-1)][1], noteColorArrayOfNote)

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
      
      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})

      console.log('This board have been edit: ', boardToEdit)
    }
  }

  setAColorByNote(note, color, sortedNotes, arrayQueYaTengo) {
    console.log(sortedNotes)
    let coloredArray = []
    let cleanNote = cleanTheNote(note)

    for (var x = 0; x < sortedNotes.length; x++) {
      if (sortedNotes[x] === cleanNote) {
        coloredArray.push(color);
      }
      else {
        coloredArray.push(arrayQueYaTengo[x]);
      }
    }
    return coloredArray
  }

  getTheBoardToEdit(id) {
    return this.state.boardInfo.find(
      (board) => {
        return board.id === id
      }
    )
  }

  getTheHistoryWithTheId(id) {
    return this.state.history.find(
      (history) => {
        return history.id === id
      }
    )
  }

  getTheHistoryWithDifferentId(id) {
    return this.state.history.filter(
      (history) => {
        return history.id !== id
      }
    )
  }

  configHistory(id, workingBoard) {
    let historyToWork = this.getTheHistoryWithTheId(id);
    let historyThatWontMutate = this.getTheHistoryWithDifferentId(id);
    historyToWork.UndoStatesRepository = [...historyToWork.UndoStatesRepository, {settedNotes: workingBoard.settedNotes, noteColor: {...workingBoard.noteColor}, tuning: {...workingBoard.tuning}}]
    historyToWork.RedoStatesRepository = []

    return [...historyThatWontMutate, historyToWork ]
  }

  testStringColorBeforeMove(colors) {
    let notesWithColor = 0, w = 0
    let colorsToBeTested = []
    let wayIn = false

    for (w = 0; w < colors.length; w++) {
      if (colors[w] !== '') {
        colorsToBeTested.push(colors[w])
        notesWithColor++
      }
    }

    if (notesWithColor > 1) {
      for (var r = 0; r < colorsToBeTested.length; r++) {
        for (var k = 0; k < colorsToBeTested.length; k++) {
          if (colorsToBeTested[r] !== colorsToBeTested[k]) {
            wayIn = true
            return wayIn
          }
        }
      }
    }
  }

  moveColorsToRight(id, position, string) {
    let boardToEdit = this.getTheBoardToEdit(id)    
    let stringNotes = stringCorrespondencies()[string]
    let colors = boardToEdit.noteColor[stringNotes]
    
    let returnTrueIfAbleToMove = this.testStringColorBeforeMove(colors)
    
    if (returnTrueIfAbleToMove) {
      let newHistoryState = this.configHistory(id, boardToEdit)

      boardToEdit.noteColor[stringNotes] = moveElementsActiveOfArrayToRigth(colors)

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
    }
    
  }

  colourNotesSet(id, position, tuning) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let stringsCorrespondencies = stringCorrespondencies();
    let returnTrueIfPaintIsNedded = false
    let notesActiveByString

    for (var p = 1; p <= 6; p++) {
      notesActiveByString = this.getSortedNotes(boardToEdit.settedNotes, p);
      for (var xx = 0; xx < boardToEdit.noteColor[stringsCorrespondencies[p]].length; xx++) {
        if (this.setColorsInArrayByNote(notesActiveByString, tuning['tuningInfo'][p][1])[xx] !== boardToEdit.noteColor[stringsCorrespondencies[p]][xx]) {
          returnTrueIfPaintIsNedded = true
        }
      }
    }
    console.log(this.getSortedNotes(boardToEdit.settedNotes, 1))
    if (returnTrueIfPaintIsNedded) {
      let newHistoryState = this.configHistory(id, boardToEdit)
      for (var x = 1; x <= 6; x++) {
        notesActiveByString = this.getSortedNotes(boardToEdit.settedNotes, x);
        
        boardToEdit.noteColor[stringsCorrespondencies[x]] = this.setColorsInArrayByNote(notesActiveByString, tuning['tuningInfo'][x][1])
      }

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
    }
  }

  setColorsInArrayByNote(activeNotes, sortedNotesInString) {
    let count = 0
    let coloredArray = []
    
    for (var x = 0; x < sortedNotesInString.length; x++) {
      for (var y = 0; y < activeNotes.split(' ').length; y++) {
        if (sortedNotesInString[x] === activeNotes.split(' ')[y]) {
          coloredArray.push(colorByNote()[activeNotes.split(' ')[y]]);
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
    let cleanNote = cleanTheNote(note);

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

  getSortedNotes(notes, string) {
    let sortedNotes = ''
    let unsortedNotes = this.getScaleNotesOnString(notes, string)

    sortedNotes = this.sortThisNotes(sortedNotesByString()[string], unsortedNotes)
    
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
    ), history: this.state.boardInfo.filter(
        (historyItem) => {
          return historyItem.id !== id
        }
      )
    });
    console.log('This board with the ' + id + ' have been removed.');
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
    let stringsCorrespondencies = stringCorrespondencies()
    let sortedNotes = sortedNotesByString();
    let newHistoryState = this.configHistory(id, boardToEdit)

    boardToEdit.settedNotes = (boardToEdit.settedNotes).replace(note + ' ', '');
    boardToEdit.noteColor[stringsCorrespondencies[note.slice(-1)]] = this.unsetColorInArray(note, sortedNotes[note.slice(-1)], boardToEdit.noteColor[stringsCorrespondencies[note.slice(-1)]]);
    let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);;

    this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})

    console.log(note, 'should have been remove from ', boardToEdit);
  }

  setAllNotes(id, position) {
    let boardToEdit = this.getTheBoardToEdit(id)
    let takeCount = countElementsOfAnArray(boardToEdit.settedNotes)

    if (takeCount < 72) {
      let newHistoryState = this.configHistory(id, boardToEdit)

      boardToEdit.settedNotes = allNotes()

      for (var x = 1; x <= 6; x++) {
        boardToEdit.noteColor[stringCorrespondencies()[x]] = notesColors()['0']
      }

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);
      
      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})

      console.log('All notes drawn in board: ', boardToEdit);
    }
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

  removeElementFromArray(elem, arr) {
    let newArray = []
    for (var x = 0; x < arr.length; x++) {
      if (elem !== arr[x]) {
        newArray.push(arr[x])
      }
    }
    return newArray
  }

  removeStringNotes(id, position, string) {
    let boardToEdit = this.getTheBoardToEdit(id)

    if (boardToEdit.settedNotes.includes(string)) {
      let notesThatWontBeRemoved = ''
      for (var x = 0; x < boardToEdit.settedNotes.split(' ').length; x++){
        if (boardToEdit.settedNotes.split(' ')[x] !== '') {
          if (boardToEdit.settedNotes.split(' ')[x].includes(string.toString()) !== true) {
            notesThatWontBeRemoved += boardToEdit.settedNotes.split(' ')[x] + ' ';
          }
        }
      } 
 
      let newHistoryState = this.configHistory(id, boardToEdit)

      boardToEdit.settedNotes = notesThatWontBeRemoved;
      boardToEdit.noteColor[stringCorrespondencies()[string]] = ['', '', '', '', '', '', '', '', '', '', '', '']

      let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

      this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
    }
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

      let notesToRemove = ''

      for (var i = valueFrom; i <= valueTo; i++) {
        for (var z = 0; z <= 5; z++) {
          if (z === 5) {
            notesToRemove += notesByFret()[i][z];
          }
          else {
            notesToRemove += notesByFret()[i][z] + ' ';
          }
        }
        notesToRemove += ' ';
      }      

      let boardToEdit = this.getTheBoardToEdit(id)
      let notesThatWontBeRemoved = '';

      for (var x = 0; x < boardToEdit.settedNotes.split(' ').length; x++) {
        if (notesToRemove.includes(boardToEdit.settedNotes.split(' ')[x]) !== true) {
          notesThatWontBeRemoved += boardToEdit.settedNotes.split(' ')[x] + ' ';
        }
      }
      
      let notesThatWontBeRemovedLength = countElementsOfAnArray(notesThatWontBeRemoved)
      let boardNotesLength = countElementsOfAnArray(boardToEdit.settedNotes)

      if (notesThatWontBeRemovedLength < boardNotesLength) {
        let newHistoryState = this.configHistory(id, boardToEdit)
        let stringsCorrespondencies = stringCorrespondencies()

        for(var v = 0; v < notesToRemove.split(' ').length; v++) {
          if(notesToRemove.split(' ')[v] !== '') {
            boardToEdit.noteColor[stringsCorrespondencies[notesToRemove.split(' ')[v].slice(-1)]] = this.unsetColorInArray(notesToRemove.split(' ')[v], sortedNotesByString()[notesToRemove.split(' ')[v].slice(-1)], boardToEdit.noteColor[stringsCorrespondencies[notesToRemove.split(' ')[v].slice(-1)]]);
          }
        }

        boardToEdit.settedNotes = notesThatWontBeRemoved;
        let newBoardInfoState = this.getNewStateWithSamePosition(position, boardToEdit, this.state.boardInfo);

        this.setState({...this.state, boardInfo: newBoardInfoState, history: newHistoryState})
      } 
    }
  }
}

export default Mastboard;