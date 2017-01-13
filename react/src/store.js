import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { fetchData } from './actions/actionCreators'

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
