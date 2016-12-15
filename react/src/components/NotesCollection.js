import React, { Component }  from 'react';
import Note from './Note';

class NotesCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.populateCollection = this.populateCollection.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  populateCollection(){
    let searchTerm = this.state.value;
    let notes = this.props.chosenFolderNotes.map((note, index)=>{
      if(searchTerm.trim() === '' || note.body.includes(searchTerm)){
        return (
          <Note key={index} index={index} note={note} {...this.props}/>
        )
      }
    })
    return notes;
  };

  handleClick(){
    this.props.selectNote({});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    let collection = this.populateCollection();
    return (
      <div className='notes'>
        <div className='note-tools note-header'>
          <button className='button new-note' onClick={this.handleClick}>New Note</button>
          <form id='search-form' onSubmit={this.handleSubmit}>
            <input id='search-field' type='text'onChange={this.handleChange} placeholder='Search'/>
          </form>
        </div>
        {collection}
      </div>
    );
  }
}

export default NotesCollection;
