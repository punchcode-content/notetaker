import React from 'react'

const truncate = text => {
    text = text.replace("\s+", " ")
    if (text.length < 40) {
        return text
    }
    return text.substr(0, 40) + "...";
}

class NoteList extends React.Component {

    renderNote(note, idx) {
        return (
            <div key={note.id} className="NoteList-note" data-idx={idx} onClick={this.onSelect.bind(this)}>
                <div className="NoteList-title">{note.title}</div>
                <div className="NoteList-body">{truncate(note.text)}</div>
            </div>
        )
    }

    onSelect(event) {
        let target = event.currentTarget
        console.log(target)
        const idx = parseInt(target.getAttribute('data-idx'))
        this.props.onSelect(idx)
    }
    
    render() {
        return (
            <div className="NoteList">
                {this
                    .props
                    .notes
                    .map((note, idx) => this.renderNote(note, idx))}
            </div>
        )
    }
}

export default NoteList