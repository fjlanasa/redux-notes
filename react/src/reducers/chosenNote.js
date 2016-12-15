function chosenNote(state={}, action) {
  switch(action.type){
    case 'SELECT_NOTE':
      return action.note;
    default:
    return state;
  }
}

export default chosenNote;
