import React, { Component } from 'react';

class Note extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectNote(this.props.note);
  }

  render() {
    let noteClass = 'note';
    let noteBody = this.props.note.body
    if(this.props.chosenNote.id == this.props.note.id) {
      noteClass = 'note selected';
    }
    if(noteBody.length > 40){
      noteBody = `${noteBody.substring(0,37)}...`
    }
    return (
      <div className={noteClass} onClick={this.handleClick}>
        <div className='name'>
          <div><strong>{noteBody}</strong></div>
          <div>{this.props.note.updated_at.substring(0,10)}</div>
        </div>
      </div>
    );
  };
}

export default Note;
