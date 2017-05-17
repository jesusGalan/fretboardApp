import React, { Component } from 'react';
import {Row} from 'components/common/Template';

import Frets from '../Frets'
import Toolbox from 'components/Mastboard/parts/Toolbox'


class Board extends Component {
  render() {
    return (
      <Row>
        <Frets settedNotes={this.props.settedNotes}
              setDataNote={this.props.setNote}
              removeNote={this.props.unsetNote}
              noteColor={this.props.noteColor}/>
        <Toolbox setAllNotes={this.props.setAllNotes}
              restartBoard={this.props.unsetAllNotes}
              invertNotes={this.props.setInversions}
              removeStringNote={this.props.removeStringNotes}
              removeFrets={this.props.removeFretsFrom}
              giveColor={this.props.giveColor}
              eraseBoard={this.props.removeThisBoard}
              moveColorsToLeft={this.props.moveColorsToLeft}
              moveColorsToRight={this.props.moveColorsToRight}/>
      </Row>
    );
  }

  componentDidMount() {
    this.setState({...this.state, settedNotes: this.props.showNotes + ' '});
  }
}

export default Board;
