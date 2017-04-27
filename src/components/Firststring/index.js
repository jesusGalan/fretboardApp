import React, { Component } from 'react';
import './index.css';

import Note from '../../components/Note'

class Firststring extends Component {
  constructor() {
    super();
    this.state = {
      Ecolor: "#AEBCDA"
    }
  }

  render() {

    return (

      <div className="Firststring">

        <div className="aire t0" onDoubleClick={() => this.props.setNote('E1')}>
          <Note numberOfString='1'
                data={this.props.data}
                colour={this.props.colorSet[0]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t1" onDoubleClick={() => this.props.setNote('F1')}>
          {this.drawNote('F')}
        </div>

        <div className="traste t2" onDoubleClick={() => this.props.setNote('F#1')}>
          {this.drawNote('F#')}
        </div>

        <div className="traste t3" onDoubleClick={() => this.props.setNote('G1')}>
          {this.drawNote('G')}
        </div>

        <div className="traste t4" onDoubleClick={() => this.props.setNote('G#1')}>
          {this.drawNote('G#')}
        </div>

        <div className="traste t5" onDoubleClick={() => this.props.setNote('A1')}>
          {this.drawNote('A')}
        </div>

        <div className="traste t6" onDoubleClick={() => this.props.setNote('A#1')}>
          {this.drawNote('A#')}
        </div>

        <div className="traste t7" onDoubleClick={() => this.props.setNote('B1')}>
          {this.drawNote('B')}
        </div>

        <div className="traste t8" onDoubleClick={() => this.props.setNote('C1')}>
          {this.drawNote('C')}
        </div>

        <div className="traste t9" onDoubleClick={() => this.props.setNote('C#1')}>
          {this.drawNote('C#')}
        </div>

        <div className="traste t10" onDoubleClick={() => this.props.setNote('D1')}>
          {this.drawNote('D')}
        </div>

        <div className="traste t11" onDoubleClick={() => this.props.setNote('D#1')}>
          {this.drawNote('D#')}
        </div>

      </div>
    );
  }

  drawNote(note) {
    if (this.props.data.includes(note + '1')){
      return (
        <div className="button-wrapper">
          <button style={this.colorStyle} className="note-button" onClick={() => this.props.removeNote(note + '1')}>{note}</button>
        </div>

      )
    }
  }
}
export default Firststring;
