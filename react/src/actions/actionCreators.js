export function setFolders(folders) {
  return {
    type: 'SET_FOLDERS',
    folders
  }
}

export function selectFolder(folder) {
  return {
    type: 'SELECT_FOLDER',
    folder
  }
}

export function selectNote(note) {
  return {
    type: 'SELECT_NOTE',
    note
  }
}

export function setNotes(notes) {
  return {
    type: 'SET_NOTES',
    notes
  }
}

export function fetchData(folderID = null, noteID = null) {
  return function(dispatch) {
    $.ajax({
      url: '/api/folders',
      data: {folderID: folderID, noteID: noteID}
    }).done((data) => {
      dispatch(setFolders(data.folders));
      dispatch(setNotes(data.notes));
      dispatch(selectFolder(data.chosenFolder));
      dispatch(selectNote(data.chosenNote));
    })
    return null;
  }
}
