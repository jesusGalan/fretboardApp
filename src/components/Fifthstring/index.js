import React, { Component } from 'react';
import './index.css';

class Fifthstring extends Component {
  render() {
    return (
      <div className="Fifthstring">

        <div className="aire t0" onClick={() => this.props.setNote('A5')}>
          {this.drawNote('A')}
        </div>

        <div className="traste t1" onClick={() => this.props.setNote('A#5')}>
          {this.drawNote('A#')}
        </div>

        <div className="traste t2" onClick={() => this.props.setNote('B5')}>
          {this.drawNote('B')}
        </div>

        <div className="traste t3" onClick={() => this.props.setNote('C5')}>
          {this.drawNote('C')}
        </div>

        <div className="traste t4" onClick={() => this.props.setNote('C#5')}>
          {this.drawNote('C#')}
        </div>

        <div className="traste t5" onClick={() => this.props.setNote('D5')}>
          {this.drawNote('D')}
        </div>

        <div className="traste t6" onClick={() => this.props.setNote('D#5')}>
          {this.drawNote('D#')}
        </div>

        <div className="traste t7" onClick={() => this.props.setNote('E5')}>
          {this.drawNote('E')}
        </div>

        <div className="traste t8" onClick={() => this.props.setNote('F5')}>
          {this.drawNote('F')}
        </div>

        <div className="traste t9" onClick={() => this.props.setNote('F#5')}>
          {this.drawNote('F#')}
        </div>

        <div className="traste t10" onClick={() => this.props.setNote('G5')}>
          {this.drawNote('G')}
        </div>

        <div className="traste t11" onClick={() => this.props.setNote('G#5')}>
          {this.drawNote('G#')}
        </div>

      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + '5')){
      return (
        <div className="button-wrapper">
          <button className="note-button" onClick={() => this.props.removeNote(note + '5')}>{note}</button>
        </div>
      )
    }
  }
}

export default Fifthstring;
