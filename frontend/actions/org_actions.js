import * as APIUtil from '../util/org_api_util';

export const RECEIVE_REPOS = "RECEIVE_REPOS";


export const receiveRepos = (data) => {
  return {
    type: RECEIVE_REPOS,
    repos: data
  };
};

export const fetchRepos = (org) => {
  return (dispatch) => {
    return APIUtil.fetchRepos(org).then( repos => {
      return dispatch(receiveRepos(repos));
    });
  };
};
