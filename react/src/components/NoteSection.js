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
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.value);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.chosenNote){
      this.setState({value: nextProps.chosenNote.body})
    }
  }

  render() {
    return(
      <div className='small-12 medium-4 columns'>
        <div>
          <form id='note-form' onSubmit={this.handleSubmit}>
            <textarea value={this.state.value} onChange={this.handleChange}/>
            <input className='save submit' type='submit'/>
          </form>
        </div>
      </div>
    );
  }
};

export default NoteSection;
