import React, { Component } from 'react';
import {Row} from 'components/common/Template';

import Frets from '../Frets'
import Toolbox from 'components/GuitarApp/parts/Toolbox'


class Board extends Component {
  render() {
    return (
      <Row>
        <Frets settedNotes={this.props.settedNotes}
              setDataNote={this.props.setNote}
              removeNote={this.props.unsetNote}
              noteColor={this.props.noteColor}
              tuning={this.props.tuning} />
        <Toolbox setAllNotes={this.props.setAllNotes}
              restartBoard={this.props.unsetAllNotes}
              invertNotes={this.props.setInversions}
              removeStringNote={this.props.removeStringNotes}
              removeFrets={this.props.removeFretsFrom}
              giveColor={this.props.giveColor}
              eraseBoard={this.props.removeThisBoard}
              moveColorsToLeft={this.props.moveColorsToLeft}
              moveColorsToRight={this.props.moveColorsToRight}
              redo={this.props.redo}
              undo={this.props.undo}
              changeTuning={this.props.changeTuning}
              history={this.props.history}/>
      </Row>
    );
  }

  componentDidMount() {
    this.setState({...this.state, settedNotes: this.props.showNotes + ' '});
  }
}

export default Board;
