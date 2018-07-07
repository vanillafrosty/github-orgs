import { RECEIVE_ORG } from '../actions/org_actions';

const orgReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ORG:
      return action.repos;
    default:
      return state;
  }
};

export default orgReducer;
