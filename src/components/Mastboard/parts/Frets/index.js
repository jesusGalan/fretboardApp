import React, { Component } from 'react';

import Fretguide from 'components/Mastboard/parts/Fretguide'
import String from 'components/Mastboard/parts/String'


class Frets extends Component {
  render() {
    let strings = []
        let x = 1

        for (x = 1; x <= 6; x++) {
            strings.push(x)
        }
    return (
      <div>
        <Fretguide/>
        {strings.map(this.renderString.bind(this))}
      </div>
    );
  }

  renderString(x, i) {
    let stringAndNotesCorrespondencies = {
      '1': ['firststring', ['E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']],
      '2': ['secondstring', ['B', 'C', 'C#', 'D', 'D#', 'E', 'F','F#', 'G', 'G#', 'A', 'A#']],
      '3': ['thirdstring', ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F','F#']],
      '4': ['fourthstring', ['D', 'D#', 'E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#']],
      '5': ['fifthstring', ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']],
      '6': ['sixthstring', ['E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']]
    }
    return (
      <String key={i}
              data={this.props.settedNotes}
              setNote={this.props.setDataNote}
              removeNote={this.props.removeNote}
              notesColors={this.props.noteColor[stringAndNotesCorrespondencies[x][0]]}
              stringNumber={x.toString()}
              stringName={stringAndNotesCorrespondencies[x][0]}
              sortNotes={stringAndNotesCorrespondencies[x][1]}/>
    )
  }
}

export default Frets;