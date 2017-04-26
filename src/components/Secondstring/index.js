import React, { Component } from 'react';
import './index.css';

class Secondstring extends Component {
  render() {
    return (
      <div className="Secondstring">
        <div className="aire t0" onClick={() => this.props.setNote('B2')}>
          {this.drawNote('B')}
        </div>

        <div className="traste t1" onClick={() => this.props.setNote('C2')}>
          {this.drawNote('C')}
        </div>

        <div className="traste t2" onClick={() => this.props.setNote('C#2')}>
          {this.drawNote('C#')}
        </div>

        <div className="traste t3" onClick={() => this.props.setNote('D2')}>
          {this.drawNote('D')}
        </div>

        <div className="traste t4" onClick={() => this.props.setNote('D#2')}>
          {this.drawNote('D#')}
        </div>

        <div className="traste t5" onClick={() => this.props.setNote('E2')}>
          {this.drawNote('E')}
        </div>

        <div className="traste t6" onClick={() => this.props.setNote('F2')}>
          {this.drawNote('F')}
        </div>

        <div className="traste t7" onClick={() => this.props.setNote('F#2')}>
          {this.drawNote('F#')}
        </div>

        <div className="traste t8" onClick={() => this.props.setNote('G2')}>
          {this.drawNote('G')}
        </div>

        <div className="traste t9" onClick={() => this.props.setNote('G#2')}>
          {this.drawNote('G#')}
        </div>

        <div className="traste t10" onClick={() => this.props.setNote('A2')}>
          {this.drawNote('A')}
        </div>

        <div className="traste t11" onClick={() => this.props.setNote('A#2')}>
          {this.drawNote('A#')}
        </div>

      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + '2')){
      return (
        <div className="button-wrapper">
          <button className="note-button" onClick={() => this.props.removeNote(note + '2')}>{note}</button>
        </div>
      )
    }
  }
}

export default Secondstring;
