import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import NotFoundPage from './components/NotFoundPage'
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


$(function() {
  if(document.getElementById('app') !== null){
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App} />
          <Route path='*' component={NotFoundPage} />
        </Router>
      </Provider>,
      document.getElementById('app')
    );
  }
});
