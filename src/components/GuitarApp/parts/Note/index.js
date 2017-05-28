import React, { Component } from 'react';

import {CircleButton, NoteEnclosure} from './styled'

class Note extends Component {
  render() {
    if (this.props.data.includes(this.props.noteName + this.props.stringNumber)){
      return (
        <NoteEnclosure>
            <CircleButton
              color={this.props.noteColor}
              onClick={this.removeNoteAndStopPropagation.bind(this, this.props.noteName + this.props.stringNumber)}>
                  {this.props.noteName}
            </CircleButton>
          </NoteEnclosure>
      );
    }
    else {
      return (
        <NoteEnclosure/>
      )
    }
  }

  removeNoteAndStopPropagation(note, event) {
    this.props.removeNote(note)
    event.stopPropagation()
  }
}

export default Note;
