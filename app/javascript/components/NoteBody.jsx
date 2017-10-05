import React from "react"

class NoteBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.note.title,
            text: this.props.note.text
        }
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleTextChange(event) {
        this.setState({text: event.target.value})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.note.title,
            text: nextProps.note.text
        })
    }

    render() {
        return (
            <div className="NoteBody">
                <input type="text" className="NoteBody-title" 
                    value={this.state.title} 
                    onChange={this.handleTitleChange.bind(this)} />
                <textarea
                    className="NoteBody-text"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}/>
            </div>
        )
    }
}

export default NoteBody