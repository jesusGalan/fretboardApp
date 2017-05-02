import React, { Component } from 'react';

import Fret from '../../components/Fret'

import './index.css';

class String extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let strings = []
        let x = 0

        for (x = 0; x < 12; x++) {
            strings.push(x)
        }

        return ( 
            <div className="String">
                {strings.map(this.renderFrets.bind(this))}      
            </div>
        );
    }

    renderFrets(x) {
        return (
            <div className="String">
                <Fret notesColors={this.props.notesColors}
                    data={this.props.data}
                    stringName={this.props.stringNameAndNumber.split('-')[0]}
                    note={this.props.sortNotes}
                    colorOfNote={this.props.notesColors}
                    numberOfFret={x.toString()}
                    stringNumber={this.props.stringNameAndNumber.split('-')[1]}
                    removeNote={this.props.removeNote}
                    setNote={this.props.setNote}></Fret>
            </div>
        )
    }
}

export default String;