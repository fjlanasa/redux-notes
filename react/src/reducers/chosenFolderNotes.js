function chosenFolderNotes(state=[], action) {
  switch(action.type){
    case 'SET_NOTES':
      return action.notes;
    default:
    return state;
  }
}

export default chosenFolderNotes;
