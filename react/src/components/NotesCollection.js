import React from 'react';
import Note from './Note';

function NotesCollection(props) {
  let notes = props.chosenFolderNotes.map((note, index)=>{
    return (
      <Note key={index} index={index} note={note} {...props}/>
    )
  })
  return (
    <div className='notes'>
      {notes}
    </div>
  )
}

export default NotesCollection;
