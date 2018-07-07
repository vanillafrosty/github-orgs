import { combineReducers } from 'redux';
import orgReducer from './org_reducer';

const obj = {
  org: orgReducer
};

export const rootReducer = combineReducers(obj);
