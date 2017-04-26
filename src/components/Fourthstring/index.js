import React, { Component } from 'react';
import './index.css';

class Fourthstring extends Component {
  render() {
    return (
      <div className="Fourthstring">

        <div className="aire t0" onClick={() => this.props.setNote('D4')}>
          {this.drawNote('D')}
        </div>

        <div className="traste t1" onClick={() => this.props.setNote('D#4')}>
          {this.drawNote('D#')}
        </div>

        <div className="traste t2" onClick={() => this.props.setNote('E4')}>
          {this.drawNote('E')}
        </div>

        <div className="traste t3" onClick={() => this.props.setNote('F4')}>
          {this.drawNote('F')}
        </div>

        <div className="traste t4" onClick={() => this.props.setNote('F#4')}>
          {this.drawNote('F#')}
        </div>

        <div className="traste t5" onClick={() => this.props.setNote('G4')}>
          {this.drawNote('G')}
        </div>

        <div className="traste t6" onClick={() => this.props.setNote('G#4')}>
          {this.drawNote('G#')}
        </div>

        <div className="traste t7" onClick={() => this.props.setNote('A4')}>
          {this.drawNote('A')}
        </div>

        <div className="traste t8" onClick={() => this.props.setNote('A#4')}>
          {this.drawNote('A#')}
        </div>

        <div className="traste t9" onClick={() => this.props.setNote('B4')}>
          {this.drawNote('B')}
        </div>

        <div className="traste t10" onClick={() => this.props.setNote('C4')}>
          {this.drawNote('C')}
        </div>

        <div className="traste t11" onClick={() => this.props.setNote('C#4')}>
          {this.drawNote('C#')}
        </div>

      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + '4')){
      return (
        <div className="button-wrapper">
          <button className="note-button" onClick={() => this.props.removeNote(note + '4')}>{note}</button>
        </div>
      )
    }
  }
}

export default Fourthstring;
