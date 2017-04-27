import React, { Component } from 'react';
import './index.css';

class Note extends Component {
  render() {
    return (
      <div className="Note">
        {this.drawNote('E')}
      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + this.props.numberOfString)){
      return (
        <div className="button-wrapper">
          <button
            id="1-E1"
            className="note-button"
            onClick={() => this.props.removeNote(note + '1')}>
                {note}
          </button>
        </div>

      )
    }
  }
}

export default Note;
