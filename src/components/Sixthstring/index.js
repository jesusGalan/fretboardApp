import React, { Component } from 'react';
import './index.css';

class Sixthstring extends Component {
  render() {
    return (
      <div className="Sixthstring">

        <div className="aire t0" onClick={() => this.props.setNote('E6')}>
          {this.drawNote('E')}
        </div>

        <div className="traste t1" onClick={() => this.props.setNote('F6')}>
          {this.drawNote('F')}
        </div>

        <div className="traste t2" onClick={() => this.props.setNote('F#6')}>
          {this.drawNote('F#')}
        </div>

        <div className="traste t3" onClick={() => this.props.setNote('G6')}>
          {this.drawNote('G')}
        </div>

        <div className="traste t4" onClick={() => this.props.setNote('G#6')}>
          {this.drawNote('G#')}
        </div>

        <div className="traste t5" onClick={() => this.props.setNote('A6')}>
          {this.drawNote('A')}
        </div>

        <div className="traste t6" onClick={() => this.props.setNote('A#6')}>
          {this.drawNote('A#')}
        </div>

        <div className="traste t7" onClick={() => this.props.setNote('B6')}>
          {this.drawNote('B')}
        </div>

        <div className="traste t8" onClick={() => this.props.setNote('C6')}>
          {this.drawNote('C')}
        </div>

        <div className="traste t9" onClick={() => this.props.setNote('C#6')}>
          {this.drawNote('C#')}
        </div>

        <div className="traste t10" onClick={() => this.props.setNote('D6')}>
          {this.drawNote('D')}
        </div>

        <div className="traste t11" onClick={() => this.props.setNote('D#6')}>
          {this.drawNote('D#')}
        </div>

      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + '6')){
      return (
        <div className="button-wrapper">
          <button className="note-button" onClick={() => this.props.removeNote(note + '6')}>{note}</button>
        </div>
      )
    }
  }
}

export default Sixthstring;
