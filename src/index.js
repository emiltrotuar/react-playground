import './index.css';
import './todoList.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './components/todoList/reducers'

import registerServiceWorker from './registerServiceWorker';

let initialState = {
  projects: [ {id: 12345, name: 'initial', items: []} ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
