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
        <Row>
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
        <select name="afinaciones" id="tuning">
          <option value="1">Windows Vista</option> 
          <option value="2">Windows 7</option> 
          <option value="3">Windows XP</option>
          <option value="10">Fedora</option> 
          <option value="11">Debian</option> 
          <option value="12">Suse</option> 
        </select>
      )
    }

    const mainBoardFunctions = () => {
      return (
        <Row>
          <FlexButton className="fa fa-undo" aria-hidden="true" />
          <FlexButton className="fa fa-repeat" aria-hidden="true" />
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
        <Row>
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
