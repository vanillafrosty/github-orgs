import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { fetchOrg } from './util/org_api_util';
import { fetchRepos } from './actions/org_actions';

window.fetchRepos = fetchRepos;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
