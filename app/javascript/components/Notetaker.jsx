import React from 'react'
import NoteList from './NoteList'
import NoteBody from './NoteBody';

class Notetaker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentNote: 0
        }
    }

    changeNote(index) {
        this.setState({
            currentNote: index
        })
    }

    render() {
        return (
            <div className="Notetaker">
                <div className="note-wrapper">
                    <div className="note-list">
                        <NoteList notes={this.props.notes} onSelect={this.changeNote.bind(this)} />
                    </div>
                    <div className="note-body">
                        <NoteBody note={this.props.notes[this.state.currentNote]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Notetaker