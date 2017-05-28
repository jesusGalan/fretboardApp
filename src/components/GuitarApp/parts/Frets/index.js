import React, { Component } from 'react';

import Fretguide from 'components/GuitarApp/parts/Fretguide'
import String from 'components/GuitarApp/parts/String'


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
    let stringAndNotesCorrespondencies = this.props.tuning['tuningInfo']
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