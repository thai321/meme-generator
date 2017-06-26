import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootRecuder from './reducers';
import thunk from 'redux-thunk';

import { fetchMemes } from './actions';

const store = createStore(rootRecuder, applyMiddleware(thunk));
store.subscribe(() => console.log('store: ', store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
