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

export function createNote(folder, note) {
  return function(dispatch) {
    $.ajax({
      type: 'POST',
      url: '/api/notes',
      contentType: 'application/json',
      data: JSON.stringify({note: {folder_id: folder.id, body: note}})
    }).done((data) => {
      dispatch(setNotes(data.notes));
      dispatch(selectNote(data.chosenNote));
    })
    return null;
  }
}

export function editNote(note, newBody) {
  return function(dispatch) {
    $.ajax({
      type: 'PATCH',
      url: `/api/notes/${note.id}`,
      contentType: 'application/json',
      data: JSON.stringify({body: newBody})
    }).done((data) => {
      dispatch(setNotes(data.notes));
      dispatch(selectNote(data.chosenNote));
    })
  }
}

export function deleteNote(note) {
  return function(dispatch) {
    $.ajax({
      type: 'DELETE',
      url: `/api/notes/${note.id}`,
    }).done((data) =>{
      dispatch(setNotes(data.notes));
      dispatch(selectNote(data.chosenNote));
    })
    return null;
  }
}

export function createFolder(name) {
  return function(dispatch) {
    $.ajax({
      type: 'POST',
      url: '/api/folders',
      contentType: 'application/json',
      data: JSON.stringify({folder:{name: name}})
    }).done((data) => {
      dispatch(selectFolder(data.chosenFolder));
      dispatch(setFolders(data.folders));
    })
    return null;
  }
}
