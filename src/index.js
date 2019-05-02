import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';

import createStore from './store/index';
const store = createStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
