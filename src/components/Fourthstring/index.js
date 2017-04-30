import React, { Component } from 'react';
import './index.css';

import Note from '../Note';

class Fourthstring extends Component {
  render() {
    return (
      <div className="Fourthstring">

        <div className="aire t0" onDoubleClick={() => this.props.setNote('D4')}>
          <Note numberOfString='4'
                noteName="D"
                data={this.props.data}
                noteColor={this.props.noteColor[0]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t1" onDoubleClick={() => this.props.setNote('D#4')}>
          <Note numberOfString='4'
                noteName="D#"
                data={this.props.data}
                noteColor={this.props.noteColor[1]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t2" onDoubleClick={() => this.props.setNote('E4')}>
          <Note numberOfString='4'
                noteName="E"
                data={this.props.data}
                noteColor={this.props.noteColor[2]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t3" onDoubleClick={() => this.props.setNote('F4')}>
          <Note numberOfString='4'
                noteName="F"
                data={this.props.data}
                noteColor={this.props.noteColor[3]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t4" onDoubleClick={() => this.props.setNote('F#4')}>
          <Note numberOfString='4'
                noteName="F#"
                data={this.props.data}
                noteColor={this.props.noteColor[4]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t5" onDoubleClick={() => this.props.setNote('G4')}>
          <Note numberOfString='4'
                noteName="G"
                data={this.props.data}
                noteColor={this.props.noteColor[5]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t6" onDoubleClick={() => this.props.setNote('G#4')}>
          <Note numberOfString='4'
                noteName="G#"
                data={this.props.data}
                noteColor={this.props.noteColor[6]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t7" onDoubleClick={() => this.props.setNote('A4')}>
          <Note numberOfString='4'
                noteName="A"
                data={this.props.data}
                noteColor={this.props.noteColor[7]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t8" onDoubleClick={() => this.props.setNote('A#4')}>
          <Note numberOfString='4'
                noteName="A#"
                data={this.props.data}
                noteColor={this.props.noteColor[8]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t9" onDoubleClick={() => this.props.setNote('B4')}>
          <Note numberOfString='4'
                noteName="B"
                data={this.props.data}
                noteColor={this.props.noteColor[9]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t10" onDoubleClick={() => this.props.setNote('C4')}>
          <Note numberOfString='4'
                noteName="C"
                data={this.props.data}
                noteColor={this.props.noteColor[10]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t11" onDoubleClick={() => this.props.setNote('C#4')}>
          <Note numberOfString='4'
                noteName="C#"
                data={this.props.data}
                noteColor={this.props.noteColor[11]}
                removeNote={this.props.removeNote}/>
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
