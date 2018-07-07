import * as APIUtil from '../util/org_api_util';

export const RECEIVE_ORG = "RECEIVE_ORG";


export const receiveOrg = (data) => {
  return {
    type: RECEIVE_ORG,
    repos: data
  };
};

export const fetchOrg = (org) => {
  return (dispatch) => {
    return APIUtil.fetchOrg(org).then( org => {
      return dispatch(receiveOrg(org));
    });
  };
};
