import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { fetchData } from './actions/actionCreators'

const initialState = {
  folders: [],
  chosenFolderNotes: [],
  chosenFolder: {},
  chosenNote: {}
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

// store.dispatch(fetchInitialState());

export default store;
