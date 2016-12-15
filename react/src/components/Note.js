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
    if(this.props.chosenNote.id == this.props.note.id) {
      noteClass = 'note selected';
    }
    return (
      <div className={noteClass} onClick={this.handleClick}>
        <div className='name'><div>{this.props.note.body}</div></div>
      </div>
    );
  };
}

export default Note;
