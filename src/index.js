import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/counter';

// This code creates a Redux store with the provided 'reducer' function.
// The second argument 'undefined' specifies the initial state of the store.
// The third argument is a store enhancer, which enables the use of the Redux DevTools extension in the browser if it is available, otherwise it just returns the store as is.
const store = createStore(
  reducer,
  undefined,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
