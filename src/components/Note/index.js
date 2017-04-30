import React, { Component } from 'react';
import './index.css';

class Note extends Component {
  render() {
    return (
      <div className="Note">
        {this.drawNote(this.props.noteName)}
      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + this.props.numberOfString)){
      return (
        <div className="button-wrapper">
          <button
            style={{backgroundColor: this.props.noteColor}}
            id={this.props.numberOfString + note}
            className="note-button"
            onClick={() => this.props.removeNote(note + this.props.numberOfString)}>
                {note}
          </button>
        </div>
      )
    }
  }
}

export default Note;
