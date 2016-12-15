import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chosenNote from './chosenNote'
import chosenFolder from './chosenFolder'
import folders from './folders'
import chosenFolderNotes from './chosenFolderNotes'

const rootReducer = combineReducers({folders, chosenFolder, chosenNote, chosenFolderNotes, routing: routerReducer});

export default rootReducer;
