import { RECEIVE_REPOS } from '../actions/org_actions';
import { filterRepos } from './selectors';

const reposReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_REPOS:
      return action.repos;
    default:
      return state;
  }
};

export default reposReducer;
