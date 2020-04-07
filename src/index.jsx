import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './containers/app';
import { makeServer } from './server';

import './index.scss';

makeServer();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('index'));