import React, { Component } from 'react';
import Note from './Note';

class NoteSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.chosenNote.body){
      this.props.editNote(this.props.chosenNote, this.state.value);
    } else {
      this.props.createNote(this.props.chosenFolder, this.state.value);
    }
  }

  handleDelete() {
    event.preventDefault();
    this.props.deleteNote(this.props.chosenNote);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.chosenNote){
      this.setState({value: nextProps.chosenNote.body || ''});
    }
  }

  render() {
    let deleteButton;
    let submitButtonValue = 'Submit';
    if(this.props.chosenNote.body){
      deleteButton = <button href="#" className="button tiny" onClick={this.handleDelete}>Delete</button>;
      submitButtonValue = 'Update';
    }
    return(
      <div className='small-12 medium-4 columns'>
        <div>
          <button className="button tiny" onClick={this.handleSubmit}>{submitButtonValue}</button>
          {deleteButton}
          <form id='note-form' onSubmit={this.handleSubmit}>
            <textarea ref='note' placeholder='Add a new note' value={this.state.value} onChange={this.handleChange} required />
            <input type='submit' className='hidden-submit' />
          </form>
        </div>
      </div>
    );
  }
};

export default NoteSection;
