import React, { Component } from 'react';
import './index.css'

import Note from '../Note'

class Fret extends Component {
    render() {
        return (
            <div className={this.props.numberOfFret === "0" ? 
                 "aire t" + this.props.numberOfFret + " " + this.props.stringName :
                 "traste t" + this.props.numberOfFret + " " + this.props.stringName}
                 onDoubleClick={() => this.props.setNote(this.props.note[parseInt(this.props.numberOfFret, 10)] + this.props.stringNumber)}>

                <Note stringNumber={this.props.stringNumber}
                      noteName={this.props.note[parseInt(this.props.numberOfFret, 10)]}
                      data={this.props.data}
                      noteColor={this.props.notesColors[parseInt(this.props.numberOfFret, 10)]}
                      removeNote={this.props.removeNote}/>

            </div>

        );
    }
}

export default Fret;