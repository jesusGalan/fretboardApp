import React, { Component } from 'react';
import './index.css';

class Toolbox extends Component {
  constructor() {
    super();
    this.state = {
      valueFromId: Math.random(),
      valueToId: Math.random(),
    }
  }

  render() {
    return (
      <div className="Toolbox">

        <div className="tools-left-wrapper">
          <button className="fa fa-arrow-left" onClick={() => this.props.moveColorsToLeft('1')} aria-hidden="true"></button>
          <button className="fa fa-arrow-left" onClick={() => this.props.moveColorsToLeft('2')} aria-hidden="true"></button>
          <button className="fa fa-arrow-left" onClick={() => this.props.moveColorsToLeft('3')} aria-hidden="true"></button>
          <button className="fa fa-arrow-left" onClick={() => this.props.moveColorsToLeft('4')} aria-hidden="true"></button>
          <button className="fa fa-arrow-left" onClick={() => this.props.moveColorsToLeft('5')} aria-hidden="true"></button>
          <button className="fa fa-arrow-left" onClick={() => this.props.moveColorsToLeft('6')} aria-hidden="true"></button>
        </div>

        <div className="tools-left-wrapper">
          <button className="fa fa-arrow-right" onClick={() => this.props.moveColorsToRight('1')} aria-hidden="true"></button>
          <button className="fa fa-arrow-right" onClick={() => this.props.moveColorsToRight('2')} aria-hidden="true"></button>
          <button className="fa fa-arrow-right" onClick={() => this.props.moveColorsToRight('3')} aria-hidden="true"></button>
          <button className="fa fa-arrow-right" onClick={() => this.props.moveColorsToRight('4')} aria-hidden="true"></button>
          <button className="fa fa-arrow-right" onClick={() => this.props.moveColorsToRight('5')} aria-hidden="true"></button>
          <button className="fa fa-arrow-right" onClick={() => this.props.moveColorsToRight('6')} aria-hidden="true"></button>
        </div>

        <div className="tools-left-wrapper">
          <button className="fa fa-times" onClick={() => this.props.removeStringNote(1)} aria-hidden="true"></button>
          <button className="fa fa-times" onClick={() => this.props.removeStringNote(2)} aria-hidden="true"></button>
          <button className="fa fa-times" onClick={() => this.props.removeStringNote(3)} aria-hidden="true"></button>
          <button className="fa fa-times" onClick={() => this.props.removeStringNote(4)} aria-hidden="true"></button>
          <button className="fa fa-times" onClick={() => this.props.removeStringNote(5)} aria-hidden="true"></button>
          <button className="fa fa-times" onClick={() => this.props.removeStringNote(6)} aria-hidden="true"></button>
        </div>

        <div className="tools-right-wrapper">

          <div className="title-wrapper">
            <h1>Fretboard Toolbox</h1>
          </div>

          <div className="tools-inside-wrapper">

            <div className="tools-inside-aside-wrapper">
              <div className="tool-draw-all" onClick={this.props.setAllNotes}><button>Draw all</button></div>
              <div className="tool-invert" onClick={this.props.invertNotes}><button>Invert</button></div>
              <div className="tool-restart" onClick={this.props.restartBoard}><button>Restart</button></div>
              <div className="tool-restart" onClick={this.props.eraseBoard}><button>Erase Board</button></div>
            </div>

            <div className="tools-inside-aside-wrapper">

              <div className="tool-colour">
                <button onClick={this.props.giveColor}>Colour correlative</button>
              </div>

              <div className="tools-inside-bottom-wrapper">

                <div className="tool-erase-from-wrapper">
                  <button onClick={() => this.props.removeFrets(document.getElementById(this.state.valueFromId).value, document.getElementById(this.state.valueToId).value)}>Erase from:</button>
                </div>

                <div className="colour-fromto-wrapper">

                  <div className="tool-from-wrapper">
                    <input id={this.state.valueFromId} type="number" min="0" max="11" placeholder="From..."/>
                  </div>

                  <div className="tool-to-wrapper">
                    <input id={this.state.valueToId} type="number" min="0" max="11" placeholder="to..."/>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Toolbox;
