import React, { Component } from 'react';
import './index.css';

class Firststring extends Component {
  render() {
    return (
      <div className="Firststring">

        <div className="aire t0" onClick={() => this.props.setNote('E1')}>
          {this.drawNote('E')}
        </div>

        <div className="traste t1" onClick={() => this.props.setNote('F1')}>
          {this.drawNote('F')}
        </div>

        <div className="traste t2" onClick={() => this.props.setNote('F#1')}>
          {this.drawNote('F#')}
        </div>

        <div className="traste t3" onClick={() => this.props.setNote('G1')}>
          {this.drawNote('G')}
        </div>

        <div className="traste t4" onClick={() => this.props.setNote('G#1')}>
          {this.drawNote('G#')}
        </div>

        <div className="traste t5" onClick={() => this.props.setNote('A1')}>
          {this.drawNote('A')}
        </div>

        <div className="traste t6" onClick={() => this.props.setNote('A#1')}>
          {this.drawNote('A#')}
        </div>

        <div className="traste t7" onClick={() => this.props.setNote('B1')}>
          {this.drawNote('B')}
        </div>

        <div className="traste t8" onClick={() => this.props.setNote('C1')}>
          {this.drawNote('C')}
        </div>

        <div className="traste t9" onClick={() => this.props.setNote('C#1')}>
          {this.drawNote('C#')}
        </div>

        <div className="traste t10" onClick={() => this.props.setNote('D1')}>
          {this.drawNote('D')}
        </div>

        <div className="traste t11" onClick={() => this.props.setNote('D#1')}>
          {this.drawNote('D#')}
        </div>

      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + '1')){
      return (
        <div className="button-wrapper">
          <button className="note-button" onClick={() => this.props.removeNote(note + '1')}>{note}</button>
        </div>

      )
    }
  }
}

export default Firststring;
