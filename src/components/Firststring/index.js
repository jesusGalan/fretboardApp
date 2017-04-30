import React, { Component } from 'react';
import './index.css';

import Note from '../../components/Note'

class Firststring extends Component {
  render() {

    return (

      <div className="Firststring">

        <div className="aire t0" onDoubleClick={() => this.props.setNote('E1')}>
          <Note numberOfString='1'
                noteName="E"
                data={this.props.data}
                noteColor={this.props.noteColor[0]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t1" onDoubleClick={() => this.props.setNote('F1')}>
          <Note numberOfString='1'
                noteName="F"
                data={this.props.data}
                noteColor={this.props.noteColor[1]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t2" onDoubleClick={() => this.props.setNote('F#1')}>
          <Note numberOfString='1'
                noteName="F#"
                data={this.props.data}
                noteColor={this.props.noteColor[2]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t3" onDoubleClick={() => this.props.setNote('G1')}>
          <Note numberOfString='1'
                noteName="G"
                data={this.props.data}
                noteColor={this.props.noteColor[3]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t4" onDoubleClick={() => this.props.setNote('G#1')}>
          <Note numberOfString='1'
                noteName="G#"
                data={this.props.data}
                noteColor={this.props.noteColor[4]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t5" onDoubleClick={() => this.props.setNote('A1')}>
          <Note numberOfString='1'
                noteName="A"
                data={this.props.data}
                noteColor={this.props.noteColor[5]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t6" onDoubleClick={() => this.props.setNote('A#1')}>
          <Note numberOfString='1'
                noteName="A#"
                data={this.props.data}
                noteColor={this.props.noteColor[6]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t7" onDoubleClick={() => this.props.setNote('B1')}>
          <Note numberOfString='1'
                noteName="B"
                data={this.props.data}
                noteColor={this.props.noteColor[7]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t8" onDoubleClick={() => this.props.setNote('C1')}>
          <Note numberOfString='1'
                noteName="C"
                data={this.props.data}
                noteColor={this.props.noteColor[8]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t9" onDoubleClick={() => this.props.setNote('C#1')}>
          <Note numberOfString='1'
                noteName="C#"
                data={this.props.data}
                noteColor={this.props.noteColor[9]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t10" onDoubleClick={() => this.props.setNote('D1')}>
          <Note numberOfString='1'
                noteName="D"
                data={this.props.data}
                noteColor={this.props.noteColor[10]}
                removeNote={this.props.removeNote}/>
        </div>

        <div className="traste t11" onDoubleClick={() => this.props.setNote('D#1')}>
          <Note numberOfString='1'
                noteName="D#"
                data={this.props.data}
                noteColor={this.props.noteColor[11]}
                removeNote={this.props.removeNote}/>
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
