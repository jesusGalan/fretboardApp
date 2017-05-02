import React, { Component } from 'react';
import './index.css';

import Fretguide from '../../components/Fretguide'

import String from '../String'


class Frets extends Component {
  render() {
    return (
      <div className="Frets">

        <Fretguide/>

        <String data={this.props.settedNotes}
                setNote={this.props.setDataNote}
                removeNote={this.props.removeNote}
                notesColors={this.props.noteColor.firststring}
                stringNameAndNumber="primera-1"
                sortNotes={['E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']}></String>

        <String data={this.props.settedNotes}
                setNote={this.props.setDataNote}
                removeNote={this.props.removeNote}
                notesColors={this.props.noteColor.secondstring}
                stringNameAndNumber="segunda-2"
                sortNotes={['B', 'C', 'C#', 'D', 'D#', 'E', 'F','F#', 'G', 'G#', 'A', 'A#']}></String>

        <String data={this.props.settedNotes}
                setNote={this.props.setDataNote}
                removeNote={this.props.removeNote}
                notesColors={this.props.noteColor.thirdstring}
                stringNameAndNumber="tercera-3"
                sortNotes={['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F','F#']}></String>

        <String data={this.props.settedNotes}
                setNote={this.props.setDataNote}
                removeNote={this.props.removeNote}
                notesColors={this.props.noteColor.fourthstring}
                stringNameAndNumber="cuarta-4"
                sortNotes={['D', 'D#', 'E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#']}></String>

        <String data={this.props.settedNotes}
                setNote={this.props.setDataNote}
                removeNote={this.props.removeNote}
                notesColors={this.props.noteColor.fifthstring}
                stringNameAndNumber="quinta-5"
                sortNotes={['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']}></String>

        <String data={this.props.settedNotes}
                setNote={this.props.setDataNote}
                removeNote={this.props.removeNote}
                notesColors={this.props.noteColor.sixthstring}
                stringNameAndNumber="sexta-6"
                sortNotes={['E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']}></String>

      </div>
    );
  }
}

export default Frets;
