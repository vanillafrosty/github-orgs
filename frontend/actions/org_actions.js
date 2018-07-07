import * as APIUtil from '../util/org_api_util';

export const RECEIVE_ORG = "RECEIVE_ORG";


export const receiveOrg = (data) => {
  return {
    type: RECEIVE_ORG,
    repos: data
  };
};
