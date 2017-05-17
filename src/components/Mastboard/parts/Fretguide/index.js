import React, { Component } from 'react';

import {TransparentDiv} from './styled'
import {Row} from 'components/common/Template'

class Fretguide extends Component {
  render() {
    let frets = []
    let x = 0

    for (x = 0; x < 12; x++) {
        frets.push(x)
    }

    return (
      <Row>
        {frets.map(this.renderTransparentDivs.bind(this))}
      </Row>
    );
  }

  renderTransparentDivs(x) {
    if (x === 0 || x === 3 || x === 5 || x === 7) {
      return(
        <TransparentDiv key={x} number={x.toString()}>{x}</TransparentDiv>
      )
    }
    else {
      return(
        <TransparentDiv key={x} number={x.toString()}></TransparentDiv>
      )
    }
  }
}

export default Fretguide;
