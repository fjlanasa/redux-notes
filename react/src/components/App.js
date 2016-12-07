import React, {Component} from 'react';
import FoldersContainer from './FoldersContainer'
import NotesContainer from './NotesContainer'
import NoteSection from './NoteSection'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  render(){
    return (
      <div className='small-12 columns'>
        <FoldersContainer />
        <NotesContainer />
        <NoteSection />
      </div>
    );
  };
}

export default App;
