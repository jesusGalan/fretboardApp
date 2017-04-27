import React, { Component } from 'react';
import './index.css';

import Fretguide from '../../components/Fretguide'
import Firststring from '../../components/Firststring'
import Secondstring from '../../components/Secondstring'
import Thirdstring from '../../components/Thirdstring'
import Fourthstring from '../../components/Fourthstring'
import Fifthstring from '../../components/Fifthstring'
import Sixthstring from '../../components/Sixthstring'


class Fret extends Component {
  render() {
    return (
      <div className="Fret">

        <Fretguide/>

        <Firststring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}
                     colorSet={this.props.colorSet}/>

        <Secondstring data={this.props.settedNotes}
                      setNote={this.props.setDataNote}
                      removeNote={this.props.removeNote}/>

        <Thirdstring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}/>

        <Fourthstring data={this.props.settedNotes}
                      setNote={this.props.setDataNote}
                      removeNote={this.props.removeNote}/>

        <Fifthstring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}/>

        <Sixthstring data={this.props.settedNotes}
                     setNote={this.props.setDataNote}
                     removeNote={this.props.removeNote}/>

      </div>
    );
  }
}

export default Fret;
