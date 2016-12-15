import React, { Component } from 'react';
import Note from './Note';
import autosize from 'autosize'

class NoteSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      formDivClass: 'note-form'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  handleFocus() {
    this.setState({formDivClass: 'note-form focused'});
  }

  handleBlur() {
    this.setState({formDivClass: 'note-form'});
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.chosenNote){
      this.setState({value: nextProps.chosenNote.body || ''});
    }
  }

  render() {
    let deleteButton;
    let submitButtonValue = 'Save';
    let updatedOn;
    autosize(document.querySelector('textarea'));
    if(this.props.chosenNote.body){
      updatedOn = <span>Updated on <br/>{this.props.chosenNote.updated_at.substring(0,10)}</span>
      deleteButton = <button href="#" className="button tiny" onClick={this.handleDelete}>Delete</button>;
    }
    return(
      <div className='small-12 medium-4 columns callout'>
        <div style={{height: '100%'}}>
          <div className='note-tools'>
            <div className='updated-at'>
              {updatedOn}
            </div>
            <div className='note-buttons'>
              <button className="button tiny" onClick={this.handleSubmit}>{submitButtonValue}</button>
              {deleteButton}
            </div>
          </div>
          <div className={this.state.formDivClass}>
            <form id='note-form' onSubmit={this.handleSubmit}>
              <textarea ref='note' placeholder='Add a new note' value={this.state.value}
                onChange={this.handleChange} required onBlur={this.handleBlur} onFocus={this.handleFocus}/>
              <input type='submit' className='hidden-submit' />
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default NoteSection;
