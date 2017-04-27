import React, { Component } from 'react';
import './index.css';

class Thirdstring extends Component {
  render() {
    return (
      <div className="Thirdstring">

        <div className="aire t0" onDoubleClick={() => this.props.setNote('G3')}>
          {this.drawNote('G')}
        </div>

        <div className="traste t1" onDoubleClick={() => this.props.setNote('G#3')}>
          {this.drawNote('G#')}
        </div>

        <div className="traste t2" onDoubleClick={() => this.props.setNote('A3')}>
          {this.drawNote('A')}
        </div>

        <div className="traste t3" onDoubleClick={() => this.props.setNote('A#3')}>
          {this.drawNote('A#')}
        </div>

        <div className="traste t4" onDoubleClick={() => this.props.setNote('B3')}>
          {this.drawNote('B')}
        </div>

        <div className="traste t5" onDoubleClick={() => this.props.setNote('C3')}>
          {this.drawNote('C')}
        </div>

        <div className="traste t6" onDoubleClick={() => this.props.setNote('C#3')}>
          {this.drawNote('C#')}
        </div>

        <div className="traste t7" onDoubleClick={() => this.props.setNote('D3')}>
          {this.drawNote('D')}
        </div>

        <div className="traste t8" onDoubleClick={() => this.props.setNote('D#3')}>
          {this.drawNote('D#')}
        </div>

        <div className="traste t9" onDoubleClick={() => this.props.setNote('E3')}>
          {this.drawNote('E')}
        </div>

        <div className="traste t10" onDoubleClick={() => this.props.setNote('F3')}>
          {this.drawNote('F')}
        </div>

        <div className="traste t11" onDoubleClick={() => this.props.setNote('F#3')}>
          {this.drawNote('F#')}
        </div>

      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + '3')){
      return (
        <div className="button-wrapper">
          <button className="note-button" onClick={() => this.props.removeNote(note + '3')}>{note}</button>
        </div>
      )
    }
  }
}

export default Thirdstring;
