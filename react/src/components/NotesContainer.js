import React from 'react';
import NotesCollection from './NotesCollection'

const NotesContainer = props => {
  let notesCollection;
  if(props.chosenNote){
    notesCollection = <NotesCollection {...props} />;
  }
  return(
    <div className='small-12 medium-4 columns callout'>
      <div className='note-collection'>
        {notesCollection}
      </div>
    </div>
  );
};

export default NotesContainer;
