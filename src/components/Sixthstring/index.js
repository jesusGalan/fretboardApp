import React, { Component } from 'react';
import './index.css';

import Note from '../Note'

class Sixthstring extends Component {
  render() {
    return (
      <div className="Sixthstring">

        <div className="aire t0" onDoubleClick={() => this.props.setNote('E6')}>
          <Note numberOfString='6'
                noteName="E"
                data={this.props.data}
                noteColor={this.props.noteColor[0]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t1" onDoubleClick={() => this.props.setNote('F6')}>
          <Note numberOfString='6'
                noteName="F"
                data={this.props.data}
                noteColor={this.props.noteColor[1]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t2" onDoubleClick={() => this.props.setNote('F#6')}>
          <Note numberOfString='6'
                noteName="F#"
                data={this.props.data}
                noteColor={this.props.noteColor[2]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t3" onDoubleClick={() => this.props.setNote('G6')}>
          <Note numberOfString='6'
                noteName="G"
                data={this.props.data}
                noteColor={this.props.noteColor[3]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t4" onDoubleClick={() => this.props.setNote('G#6')}>
          <Note numberOfString='6'
                noteName="G#"
                data={this.props.data}
                noteColor={this.props.noteColor[4]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t5" onDoubleClick={() => this.props.setNote('A6')}>
          <Note numberOfString='6'
                noteName="A"
                data={this.props.data}
                noteColor={this.props.noteColor[5]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t6" onDoubleClick={() => this.props.setNote('A#6')}>
          <Note numberOfString='6'
                noteName="A#"
                data={this.props.data}
                noteColor={this.props.noteColor[6]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t7" onDoubleClick={() => this.props.setNote('B6')}>
          <Note numberOfString='6'
                noteName="B"
                data={this.props.data}
                noteColor={this.props.noteColor[7]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t8" onDoubleClick={() => this.props.setNote('C6')}>
          <Note numberOfString='6'
                noteName="C"
                data={this.props.data}
                noteColor={this.props.noteColor[8]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t9" onDoubleClick={() => this.props.setNote('C#6')}>
          <Note numberOfString='6'
                noteName="C#"
                data={this.props.data}
                noteColor={this.props.noteColor[9]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t10" onDoubleClick={() => this.props.setNote('D6')}>
          <Note numberOfString='6'
                noteName="D"
                data={this.props.data}
                noteColor={this.props.noteColor[10]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t11" onDoubleClick={() => this.props.setNote('D#6')}>
          <Note numberOfString='6'
                noteName="D#"
                data={this.props.data}
                noteColor={this.props.noteColor[11]}
                removeNote={this.props.removeNote}/>
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
