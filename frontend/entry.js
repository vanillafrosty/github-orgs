import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchOrg } from './util/org_api_util';

window.fetchOrg = fetchOrg;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
