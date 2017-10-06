import React from "react"

class NoteBody extends React.Component {
    handleTitleChange(event) {
        this.props.onUpdate('title', event.target.value)
    }

    handleTextChange(event) {
        this.props.onUpdate('text', event.target.value)
    }

    render() {
        return (
            <div className="NoteBody">
                <input type="text" className="NoteBody-title" 
                    value={this.props.note.title || ""} 
                    onChange={this.handleTitleChange.bind(this)} />
                <textarea
                    className="NoteBody-text"
                    value={this.props.note.text || ""}
                    onChange={this.handleTextChange.bind(this)}/>
            </div>
        )
    }
}

export default NoteBody