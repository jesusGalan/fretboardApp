import React, { Component } from 'react';
import './index.css';

import Fretguide from '../../components/Fretguide'
import Firststring from '../../components/Firststring'
import Secondstring from '../../components/Secondstring'
import Thirdstring from '../../components/Thirdstring'
import Fourthstring from '../../components/Fourthstring'
import Fifthstring from '../../components/Fifthstring'
import Sixthstring from '../../components/Sixthstring'


class Frets extends Component {
  render() {
    return (
      <div className="Frets">

        <Fretguide/>

        <Firststring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}
                     noteColor={this.props.noteColor.firststring}/>

        <Secondstring data={this.props.settedNotes}
                      setNote={this.props.setDataNote}
                      removeNote={this.props.removeNote}
                      noteColor={this.props.noteColor.secondstring}/>

        <Thirdstring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}
                     noteColor={this.props.noteColor.thirdstring}/>

        <Fourthstring data={this.props.settedNotes}
                      setNote={this.props.setDataNote}
                      removeNote={this.props.removeNote}
                      noteColor={this.props.noteColor.fourthstring}/>

        <Fifthstring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}
                     noteColor={this.props.noteColor.fifthstring}/>

        <Sixthstring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}
                     noteColor={this.props.noteColor.sixthstring}/>

      </div>
    );
  }
}

export default Frets;
