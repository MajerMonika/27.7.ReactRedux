import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { addComment } from './actions.js';
import { createStore } from 'redux';
import { reducer } from './reducer.js';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));