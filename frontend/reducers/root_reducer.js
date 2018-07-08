import { combineReducers } from 'redux';
import reposReducer from './repos_reducer';

const obj = {
  repos: reposReducer
};

export const rootReducer = combineReducers(obj);
