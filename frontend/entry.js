import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { fetchOrg } from './util/org_api_util';
import { fetchRepos } from './actions/org_actions';
import { fetchToken } from './util/auth_api_util';

window.fetchRepos = fetchRepos;
window.fetchToken = fetchToken;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
