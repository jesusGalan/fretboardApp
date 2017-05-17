import React, { Component } from 'react';

import {BorderedDiv} from './styled'

import Note from '../Note'

class Fret extends Component {
    render() {
        return (
            <BorderedDiv number={this.props.numberOfFret}
                         onClick={() => this.setNote()}>

                <Note stringNumber={this.props.stringNumber}
                      noteName={this.props.note[parseInt(this.props.numberOfFret, 10)]}
                      data={this.props.data}
                      noteColor={this.props.notesColors[parseInt(this.props.numberOfFret, 10)]}
                      removeNote={this.props.removeNote}/>

            </BorderedDiv>

        );
    }

    setNote() {
            this.props.setNote(this.props.note[parseInt(this.props.numberOfFret, 10)] + this.props.stringNumber)
        }
}

export default Fret;