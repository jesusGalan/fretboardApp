import React, { Component } from 'react';

import {FirstStringRow, SecondStringRow, ThirdStringRow, FourthStringRow, FifthStringRow, SixthStringRow} from './styled'
import Fret from 'components/GuitarApp/parts/Fret'


class String extends Component {
    render() {
        let frets = []
        let x = 0

        for (x = 0; x < 12; x++) {
            frets.push(x)
        }
        
        switch (this.props.stringName) {
            default:
            case 'firststring':
                return (
                    <FirstStringRow>{frets.map(this.renderFrets.bind(this))}</FirstStringRow>
                )
            case 'secondstring':
                return (
                    <SecondStringRow>{frets.map(this.renderFrets.bind(this))}</SecondStringRow>
                )
            case 'thirdstring':
                return (
                    <ThirdStringRow>{frets.map(this.renderFrets.bind(this))}</ThirdStringRow>
                )
            case 'fourthstring':
                return (
                    <FourthStringRow>{frets.map(this.renderFrets.bind(this))}</FourthStringRow>
                )
            case 'fifthstring':
                return (
                    <FifthStringRow>{frets.map(this.renderFrets.bind(this))}</FifthStringRow>
                )
            case 'sixthstring':
                return (
                    <SixthStringRow>{frets.map(this.renderFrets.bind(this))}</SixthStringRow>
                )
        }
    }

    renderFrets(x) {
        return (
        <Fret key={x} notesColors={this.props.notesColors}
              data={this.props.data}
              stringName={this.props.stringName}
              note={this.props.sortNotes}
              colorOfNote={this.props.notesColors}
              numberOfFret={x.toString()}
              stringNumber={this.props.stringNumber}
              removeNote={this.props.removeNote}
              setNote={this.props.setNote}></Fret>

        )
    }
}

export default String;