function chosenFolder(state={}, action) {
  switch(action.type){
    case 'SELECT_FOLDER':
      return action.folder;
    default:
    return state;
  }
}

export default chosenFolder;
