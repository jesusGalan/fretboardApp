import React, { Component } from 'react';

import {
  MainBox,
  Title,
  FlexButton,
  FlexInput} from './styled'

import {Row, Col} from 'components/common/Template'

class Toolbox extends Component {
  constructor() {
    super();
    this.state = {
      valueFromId: Math.random(),
      valueToId: Math.random(),
      tuningId: Math.random()
    }
  }

  renderStringTools (key, x, icon) {
    switch (icon) {
      default:
      case 'arrow-left':
        return (
          <FlexButton key={key} className={"fa fa-" + icon} onClick={() => this.props.moveColorsToLeft(x)} aria-hidden="true"></FlexButton>
        )
      case 'arrow-right':
        return (
        <FlexButton key={key} className={"fa fa-" + icon} onClick={() => this.props.moveColorsToRight(x)} aria-hidden="true"></FlexButton>
        )
      case 'times':
        return (
        <FlexButton key={key} className={"fa fa-" + icon} onClick={() => this.props.removeStringNote(x)} aria-hidden="true"></FlexButton>
        )
    }
  }

  render() {
    let strings = ['1', '2', '3', '4', '5', '6']
    const stringTools = () => {
      return (
        <Row long="1">
          <Col>
            {strings.map((i, x) => this.renderStringTools(x, i, 'arrow-left'))}
          </Col>
          <Col>
            {strings.map((i, x) => this.renderStringTools(x, i, 'arrow-right'))}
          </Col>
          <Col>
            {strings.map((i, x) => this.renderStringTools(x, i, 'times'))}
          </Col> 
        </Row>
      )
    }

    const boardTopTools = () => {
      return (
        <select style={{flex: 2}} name="afinaciones" id={this.state.tuningId} onChange={() => this.props.changeTuning(document.getElementById(this.state.tuningId).value)}>
          <option value="standard">Standard</option> 
          
          <option value="openA">OpenA</option>
          <option value="openA 1">OpenA alt</option>
          <option value="openA 2">OpenA alt 2</option>
          <option value="slide openA">Slide OpenA</option>
          
          <option value="openB">OpenB</option>
          <option value="openB 1">OpenB alt</option>
          
          <option value="openC">OpenC</option>
          <option value="openC 1">OpenC alt</option>
          <option value="openC 2">OpenC alt 2</option>
          
          <option value="openD">OpenD</option>
          <option value="openD 1">OpenD alt</option> 
          
          <option value="openE">OpenE</option> 
          
          <option value="openF">OpenF</option>
          <option value="openF 1">OpenF alt</option>

          <option value="openG">OpenG</option>
          <option value="openG 1">OpenG alt</option>
          <option value="openG 2">OpenG alt 2</option>
          <option value="openG 3">OpenG alt 3</option>
        </select>
      )
    }

    const mainBoardFunctions = () => {
      return (
        <Row>
          <FlexButton disabled={this.props.history.UndoStatesRepository.length < 1 ? true : false} className="fa fa-undo" aria-hidden="true" onClick={this.props.undo}/>
          <FlexButton disabled={this.props.history.RedoStatesRepository.length < 1 ? true : false} className="fa fa-repeat" aria-hidden="true" onClick={this.props.redo}/>
          <FlexButton className="fa fa-times" aria-hidden="true" onClick={this.props.eraseBoard} />
        </Row>
      )
    }

    const colourAndRemoveFromFunctions = () => {
      return (
        <Col>
          <FlexButton onClick={this.props.giveColor}>Colour correlative</FlexButton>
          <Col>
            <FlexButton onClick={() => this.props.removeFrets(document.getElementById(this.state.valueFromId).value, document.getElementById(this.state.valueToId).value)}>Erase from:</FlexButton>
            <Col long="2">
              <Row>
                <FlexInput id={this.state.valueFromId} type="number" min="0" max="11" placeholder="From..."/>
              </Row>
              <Row>
                <FlexInput id={this.state.valueToId} type="number" min="0" max="11" placeholder="to..."/>
              </Row>
            </Col>
          </Col>
        </Col>
      )
    }

    const drawNotesFunctions = () => {
      return (
        <Col>
          <FlexButton onClick={this.props.setAllNotes}>Draw all</FlexButton>
          <FlexButton onClick={this.props.invertNotes}>Invert</FlexButton>
          <FlexButton onClick={this.props.restartBoard}>Restart</FlexButton>
        </Col>
      )
    }

    return (
      <MainBox>
        {stringTools()}
        <Row long="3">
          <Col>
            <Col>
              <Row long="1">
                {boardTopTools()}
                {mainBoardFunctions()}
              </Row>
              <Row long="4">
                <Title>Fretboard Toolbox</Title>
              </Row>
              
            </Col>
            <Col>
              <Row>
                {drawNotesFunctions()}
                {colourAndRemoveFromFunctions()}
              </Row>
            </Col>
          </Col>
        </Row>
      </MainBox>
    );
  }
}

export default Toolbox;
